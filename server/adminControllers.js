const nodemailer = require("nodemailer");
require("dotenv").config();

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
const addConfirmed = async (req, res) => {
  let confirmed = await res.app
    .get("db")
    .add_confirmed([
      req.body.start_date,
      req.body.end_date,
      +req.body.dog_id,
      +req.body.kennel
    ])
    .catch(error => console.log(error));
  email(req.session.user.email);
  res.status(200).json(confirmed);
};
const deleteFromAllPending = async (req, res) => {
  let pending = await res.app
    .get("db")
    .delete_from_all_pending(req.params.id)
    .catch(error => console.log(error));
  res.status(200).json(pending);
};

function email(email) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // username
      pass: process.env.EMAIL_PASSWORD // password
    }
  });

  // send mail with defined transport object
  let info = {
    // from: "Dev Dogs", // sender address
    to: email, // list of receivers
    subject: "Reservation Confirmation", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };
  transporter.sendMail(info);
  console.log(info);
}

module.exports = {
  getAllPending,
  getAllConfirmed,
  getAllHistory,
  getOccupied,
  addConfirmed,
  deleteFromAllPending
};
