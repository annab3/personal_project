require("dotenv").config();
const express = require("express");
const app = express();
// const AWS = require("aws-sdk");
// const fs = require("fs");
// const fileType = require("file-type");
// const bluebird = require("bluebird");
// const multiparty = require("multiparty");
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const {
  login,
  register,
  registerDog,
  getUser,
  logout,
  getPets,
  editUser,
  editPets,
  uploadFiles
} = require("./controllers");
const {
  getPending,
  getConfirmed,
  getHistory,
  deletePending,
  deleteConfirmed,
  addPending
} = require("./resControllers");
const {
  getAllPending,
  getAllConfirmed,
  getAllHistory,
  getOccupied
} = require("./adminControllers");
const { getSession } = require("./middleware");

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(error => console.log(error));

// AWS.config.update({
//   accessKeyId: AWS_ACCESS_KEY,
//   secretAccessKey: AWS_SECRECT_ACCESS_KEY
// });

// AWS.config.setPromisesDependency(bluebird);
// const s3 = new AWS.S3();

// const uploadFile = (buffer, name, type) => {
//   const params = {
//     ACL: "public-read",
//     Body: buffer,
//     Bucket: BUCKET_NAME,
//     ContentType: type.mime,
//     Key: `${name}.${type.ext}`
//   };
//   return s3.upload(params).promise();
// };

app.use(
  express.json(),
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);
app.use(getSession);

app.get("/api/user", getUser);
app.post("/api/login", login);
app.get("/api/logout", logout);
app.post("/api/register", register);
app.post("/api/pets", registerDog);
app.get("/api/pets", getPets);
app.get("/api/pending", getPending);
app.get("/api/confirmed", getConfirmed);
app.get("/api/history", getHistory);
app.delete("/api/pending/:id", deletePending);
app.delete("/api/confirmed/:id", deleteConfirmed);
app.post("/api/pending", addPending);
app.put("/api/user", editUser);
app.put("/api/pets", editPets);
app.get("/api/admin/pending", getAllPending);
app.get("/api/admin/confirmed", getAllConfirmed);
app.get("/api/admin/history", getAllHistory);
app.post("/api/admin/occupied", getOccupied);
app.post("/test-upload", uploadFiles);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
