const getSession = (req, res, next) => {
  if (!req.session.user) {
    req.session.user = { client_id: 0 };
  }
  next();
};

module.exports = {
  getSession
};
