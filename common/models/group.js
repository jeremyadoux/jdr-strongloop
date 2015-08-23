module.exports = function(Group) {
  Group.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.created = Date.now();
    req.body.status = true;
    next();
  });
};
