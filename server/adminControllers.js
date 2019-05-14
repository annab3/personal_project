const nodemailer = require("nodemailer");
require("dotenv").config();

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

const getAllPending = async (req, res) => {
  let date = new Date().toISOString().split("T")[0];
  let pending = await req.app
    .get("db")
    .get_all_pending(date)
    .catch(error => console.log(error));

  res.status(200).json(pending);
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
  let email = await res.app.get("db").get_email(+req.body.dog_id);
  email(email);
  res.status(200).json(confirmed);
};
const deleteFromAllPending = async (req, res) => {
  let pending = await res.app
    .get("db")
    .delete_from_all_pending(req.params.id)
    .catch(error => console.log(error));
  res.status(200).json(pending);
};

module.exports = {
  getAllPending,
  getOccupied,
  addConfirmed,
  deleteFromAllPending
};
