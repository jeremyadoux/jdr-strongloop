var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');

module.exports = function(Chapter) {
  Chapter.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.publisherId = req.accessToken.userId;
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

};
