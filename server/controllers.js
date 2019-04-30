const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  let client = await req.app
    .get("db")
    .login(req.body.username)
    .catch(error => console.log(error));
  if (!client[0]) {
    console.log("1");
    res.status(403).json("Wrong username or password");
  } else {
    let auth = await bcrypt.compareSync(req.body.password, client[0].password);
    if (!auth) {
      console.log("2");
      res.status(403).json("Wrong username or password");
    } else {
      req.session.user = client[0];
      res.status(200).json(req.session.user);
    }
  }
};
const register = async (req, res) => {
  let {
    username,
    password,
    first_name,
    last_name,
    primary_phone,
    secondary_phone,
    address,
    city,
    state,
    zip
  } = req.body;
  let taken = await req.app.get("db").login(username);
  if (taken[0]) {
    res.status(403).json("username already taken");
  } else {
    let hash = await bcrypt.hash(password, 10);
    let client = await req.app
      .get("db")
      .register([
        username,
        hash,
        first_name,
        last_name,
        primary_phone,
        secondary_phone,
        address,
        city,
        state,
        zip
      ]);
    req.session.user = client[0];
    res.status(200).json(req.session.user);
  }
};
const checkForUser = (req, res) => {
  res.status(200).json(req.session.user);
};

module.exports = {
  login,
  register,
  checkForUser
};
