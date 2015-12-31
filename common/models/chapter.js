var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');

module.exports = function(Chapter) {
  Chapter.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.publisherId = req.accessToken.userId;
    console.log(req.body);
    next();
  });

  Chapter.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      var context = loopback.getCurrentContext();
      var currentUser = context && context.get('currentUser');

      ctx.instance.created = Date.now();
      ctx.instance.publisherId = currentUser.id;
    }
    next();
  });

  //Chapter after save..
  Chapter.observe('after save', function (ctx, next) {
    var socket = Chapter.app.io;
    if (ctx.isNewInstance) {
      //Now publishing the data..

      console.log(ctx.isNewInstance);
      pubsub.publish(socket, {
        collectionName: 'Chapter',
        data: ctx.instance,
        method: 'POST'
      });
    } else {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Chapter',
        data: ctx.instance,
        modelId: ctx.instance.id,
        method: 'PUT'
      });
    }
    //Calling the next middleware..
    next();
  }); //after save..
  //Chapterdetail before delete..
  Chapter.observe("before delete", function (ctx, next) {
    var socket = Chapter.app.io;
    //Now publishing the data..
    pubsub.publish(socket, {
      collectionName: 'Chapter',
      data: ctx.instance.id,
      modelId: ctx.instance.id,
      method: 'DELETE'
    });
    //move to next middleware..
    next();
  }); //before delete..

};
