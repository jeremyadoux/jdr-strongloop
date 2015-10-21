var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');

module.exports = function(Message) {
  Message.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });

  Message.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      var context = loopback.getCurrentContext();
      var currentUser = context && context.get('currentUser');

      ctx.instance.created = Date.now();
      ctx.instance.publisherId = currentUser.id;
    }

    next();
  });

  //Message after save..
  Message.observe('after save', function (ctx, next) {
    var Player = Message.app.models.player;
    var socket = Message.app.io;
    if (ctx.isNewInstance) {
      //Now publishing the data..
      var messageReturned = ctx.instance;
      Player.findById(messageReturned.publisherId, {include: 'avatar'}, function(err, data) {
        delete data.password;
        var r = messageReturned.toObject();
        r.player= data;

        console.log(r);

        pubsub.publish(socket, {
          collectionName: 'Message',
          data: r,
          method: 'POST'
        });
      });
    } else {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Message',
        data: ctx.instance,
        modelId: ctx.instance.id,
        method: 'PUT'
      });
    }
    //Calling the next middleware..
    next();
  }); //after save..
  //GMessageDetail before delete..
  Message.observe("before delete", function (ctx, next) {
    var socket = Message.app.io;
    //Now publishing the data..
    pubsub.publish(socket, {
      collectionName: 'Message',
      data: ctx.instance.id,
      modelId: ctx.instance.id,
      method: 'DELETE'
    });
    //move to next middleware..
    next();
  }); //before delete..
};
