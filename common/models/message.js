var loopback = require('loopback');

module.exports = function(Message) {
  Message.beforeRemote('create', function(context, user, next) {
    console.log('message create remote');
    var req = context.req;
    req.body.created = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });

  Message.beforeRemote('**', function(context, user, next) {
    console.log('message remote');
    next();
  });

  Message.observe('before save', function updateTimestamp(ctx, next) {
    var ctx = loopback.getCurrentContext();
    console.log(ctx);
    var currentUser = ctx && ctx.get('currentUser');
    console.log(currentUser);

    next();
  });
};
