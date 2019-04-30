require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const { login, register } = require("./controllers");

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
// app.use(check);

// app.get("/api/checkUser", checkForUser);
app.post("/api/login", login);
app.post("/api/register", register);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
