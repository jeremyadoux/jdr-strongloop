module.exports = function(Message) {
  Message.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.publisherId = req.accessToken.userId;
    next();
  });
};
