const getSession = (req, res, next) => {
  if (!req.session.user) {
    req.session.user = { username: "" };
  }
  next();
};

module.exports = {
  getSession
};
