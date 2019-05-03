const getAllPending = async (req, res) => {
  let pending = await req.app
    .get("db")
    .get_all_pending()
    .catch(error => console.log(error));
  res.status(200).json(pending);
};

module.exports = {
  getAllPending
};
