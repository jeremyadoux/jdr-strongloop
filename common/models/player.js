module.exports = function(Player) {
  Player.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    if(!req.body.username) {
      var mail = req.body.mail;
      mail.split('@').pop();
      req.body.username = mail;
    }
    next();
  });
};
