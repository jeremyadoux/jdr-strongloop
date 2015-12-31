var CONTAINERS_URL = '/api/files/';
module.exports = function(File) {

  File.upload = function (ctx,options,cb) {
    if(!options) options = {};
    ctx.req.params.container = 'common';

    File.app.models.container.upload(ctx.req,ctx.result,options,function (err,fileObj) {
      if(err) {
        cb(err);
      } else {
        var fileInfo = fileObj.files.file[0];
        File.create({
          name: fileInfo.name,
          type: fileInfo.type,
          container: fileInfo.container,
          url: CONTAINERS_URL+'download/'+fileInfo.name
        },function (err,obj) {
          if (err !== null) {
            cb(err);
          } else {
            cb(null, obj);
          }
        });
      }
    });
  };

  File.download = function(ctx, res, width, height, file, cb) {
    if(!width) {
      width = false;
      height = false;
    } else {
      if (!height) {
        var transformedFileName = width + "-" + file;
      } else {
        var transformedFileName = width + "-" + height + "-" + file;
      }

      File.app.models.container.getFile('common', transformedFileName, function (err, fileObj) {
        if (err) {
          File.app.models.container.getFile('common', file, function (err, fileObj) {
            if (err) {
              cb(err);
            } else {
              var fs = require('fs')
                , gm = require('gm');

              gm('./server/storage/common/'+file)
                .resize(width, height)
                .write('./server/storage/common/'+transformedFileName, function (err) {
                  if (err) {
                    cb(err);
                  } else {
                    return File.app.models.container.download('common', transformedFileName, res, cb);
                  }
                });
            }
          });
        } else {
          cb(err);
        }
      });

    }
  };

  File.remoteMethod(
    'upload',
    {
      description: 'Uploads a file',
      accepts: [
        { arg: 'ctx', type: 'object', http: { source:'context' } },
        { arg: 'options', type: 'object', http:{ source: 'query'} },
      ],
      returns: {
        arg: 'fileObject', type: 'object', root: true
      },
      http: {verb: 'post'}
    }
  );

  File.remoteMethod(
    'download',
    {
      description: 'download a file',
      accepts: [
        { arg: 'ctx', type: 'object', http: { source:'context' } },
        { arg: 'res', type: 'object', http: { source:'res' } },
        { arg: 'width', type: 'Number', http:{ source: 'query'} },
        { arg: 'height', type: 'Number', http:{ source: 'query'} },
        {arg: 'file', type: 'String', required: true}
      ],
      returns: {},
      http: {path: '/download/:file', verb: 'get'}
    }
  );

};
