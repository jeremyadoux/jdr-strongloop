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

      ctx.instance.created = new Date();
      ctx.instance.publisherId = currentUser.id;
    }

    next();
  });
};
