module.exports = function(Player) {
  Player.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    if(!req.body.username) {
      var email = req.body.email;
      var username = email.split('@')[0];
      req.body.username = username;
    }
    next();
  });
};
