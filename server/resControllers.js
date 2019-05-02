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

const deletePending = async (req, res) => {
  let pending = await req.app
    .get("db")
    .delete_pending([+req.params.id, +req.session.user.client_id])
    .catch(error => console.log(error));
  res.status(200).json(pending);
};
const deleteConfirmed = async (req, res) => {
  let confirmed = await req.app
    .get("db")
    .delete_confirmed([+req.params.id, +req.session.user.client_id])
    .catch(error => console.log(error));
  res.status(200).json(confirmed);
};
const addPending = async (req, res) => {
  let pending = await res.app
    .get("db")
    .add_pending([
      req.body.start_date,
      req.body.end_date,
      +req.body.dog_id,
      +req.session.user.client_id
    ]);
  res.status(200).json(pending);
};

module.exports = {
  getPending,
  getConfirmed,
  getHistory,
  deletePending,
  deleteConfirmed,
  addPending
};
