var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');

module.exports = function(Chronique) {
  Chronique.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });

  //Chronique after save..
  Chronique.observe('after save', function (ctx, next) {
    var socket = Chronique.app.io;
    if (ctx.isNewInstance) {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Chronique',
        data: ctx.instance,
        method: 'POST'
      });
    } else {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Chronique',
        data: ctx.instance,
        modelId: ctx.instance.id,
        method: 'PUT'
      });
    }
    //Calling the next middleware..
    next();
  }); //after save..
  //Chroniquedetail before delete..
  Chronique.observe("before delete", function (ctx, next) {
    var socket = Chronique.app.io;
    //Now publishing the data..
    pubsub.publish(socket, {
      collectionName: 'Chronique',
      data: ctx.instance.id,
      modelId: ctx.instance.id,
      method: 'DELETE'
    });
    //move to next middleware..
    next();
  }); //before delete..
};
