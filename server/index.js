require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const {
  login,
  register,
  registerDog,
  getUser,
  logout
} = require("./controllers");
const { getSession } = require("./middleware");

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(error => console.log(error));

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

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
