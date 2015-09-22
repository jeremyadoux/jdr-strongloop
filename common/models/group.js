var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');
module.exports = function (Group) {
  Group.beforeRemote('create', function (context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.status = true;
    next();
  });

  //Group after save..
  Group.observe('after save', function (ctx, next) {
    var socket = Group.app.io;
    if (ctx.isNewInstance) {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Group',
        data: ctx.instance,
        method: 'POST'
      });
    } else {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Group',
        data: ctx.instance,
        modelId: ctx.instance.id,
        method: 'PUT'
      });
    }
    //Calling the next middleware..
    next();
  }); //after save..
  //GroupDetail before delete..
  Group.observe("before delete", function (ctx, next) {
    var socket = Group.app.io;
    //Now publishing the data..
    pubsub.publish(socket, {
      collectionName: 'Group',
      data: ctx.instance.id,
      modelId: ctx.instance.id,
      method: 'DELETE'
    });
    //move to next middleware..
    next();
  }); //before delete..
}; //Module exports..
