module.exports = function(Character) {
  Character.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.playerId = req.accessToken.userId;
    next();
  });
};
