const getAllPending = async (req, res) => {
  let pending = await req.app
    .get("db")
    .get_all_pending()
    .catch(error => console.log(error));
  res.status(200).json(pending);
};
const getAllConfirmed = async (req, res) => {
  let confirmed = await req.app
    .get("db")
    .get_all_confirmed()
    .catch(error => console.log(error));
  res.status(200).json(confirmed);
};
const getAllHistory = async (req, res) => {
  let history = await req.app
    .get("db")
    .get_all_history()
    .catch(error => console.log(error));
  res.status(200).json(history);
};
const getOccupied = async (req, res) => {
  let occupied = await res.app
    .get("db")
    .get_occupied([req.body.start, req.body.end])
    .catch(error => console.log(error));
  res.status(200).json(occupied);
};

module.exports = {
  getAllPending,
  getAllConfirmed,
  getAllHistory,
  getOccupied
};
