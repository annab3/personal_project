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
      req.session.user = { client_id: client[0].client_id };
      res.status(200).json(client[0]);
    }
  }
};
const getUser = async (req, res) => {
  if (req.session.user.client_id != 0) {
    let client = await req.app
      .get("db")
      .get_user(+req.session.user.client_id)
      .catch(error => console.log(error));
    res.status(200).json(client[0]);
  } else {
    res.sendStatus(200);
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
        +primary_phone,
        +secondary_phone,
        address,
        city,
        state,
        +zip
      ]);
    req.session.user = { client_id: client[0].client_id };
    res.status(200).json(client[0]);
  }
};
const registerDog = async (req, res) => {
  let dogs = await req.app
    .get("db")
    .registerdog(
      req.body.name,
      req.body.picture,
      req.body.breed,
      req.body.birthday,
      +req.body.weight,
      req.body.color,
      req.body.feeding,
      req.session.user.client_id
    )
    .catch(error => console.log(error));
  res.status(200).json(dogs);
};

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

const getPets = async (req, res) => {
  if (req.session.user.client_id != 0) {
    let pets = await req.app
      .get("db")
      .get_pets(+req.session.user.client_id)
      .catch(error => console.log(error));
    res.status(200).json(pets);
  } else {
    res.sendStatus(200);
  }
};

module.exports = {
  login,
  register,
  registerDog,
  getUser,
  logout,
  getPets
};
