var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');

module.exports = function(Event) {
//Event after save..
  Event.observe('after save', function (ctx, next) {
    var socket = Event.app.io;
    if (ctx.isNewInstance) {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Event',
        data: ctx.instance,
        method: 'POST'
      });
    } else {
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName: 'Event',
        data: ctx.instance,
        modelId: ctx.instance.id,
        method: 'PUT'
      });
    }
    //Calling the next middleware..
    next();
  }); //after save..
  //EventDetail before delete..
  Event.observe("before delete", function (ctx, next) {
    var socket = Event.app.io;
    //Now publishing the data..
    pubsub.publish(socket, {
      collectionName: 'Event',
      data: ctx.instance.id,
      modelId: ctx.instance.id,
      method: 'DELETE'
    });
    //move to next middleware..
    next();
  }); //before delete..
};
