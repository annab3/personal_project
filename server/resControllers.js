const getPending = async (req, res) => {
  let pending = await req.app
    .get("db")
    .get_pending(+req.session.user.client_id)
    .catch(error => console.log(error));
  res.status(200).json(pending);
};
const getConfirmed = async (req, res) => {
  let confirmed = await req.app
    .get("db")
    .get_confirmed(+req.session.user.client_id)
    .catch(error => console.log(error));
  res.status(200).json(confirmed);
};
const getHistory = async (req, res) => {
  let history = await req.app
    .get("db")
    .get_history(+req.session.user.client_id)
    .catch(error => console.log(error));
  res.status(200).json(history);
};

module.exports = {
  getPending,
  getConfirmed,
  getHistory
};
