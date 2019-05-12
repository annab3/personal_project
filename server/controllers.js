const bcrypt = require("bcryptjs");
const fs = require("fs");
const fileType = require("file-type");
const multiparty = require("multiparty");
const AWS = require("aws-sdk");
const bluebird = require("bluebird");
const { BUCKET_NAME, AWS_ACCESS_KEY, AWS_SECRECT_ACCESS_KEY } = process.env;

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
      req.session.user = {
        client_id: client[0].client_id,
        email: client[0].email
      };
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
    zip,
    email
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
        +zip,
        email
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
const editUser = async (req, res) => {
  const {
    first_name,
    last_name,
    primary_number,
    secondary_number,
    address,
    city,
    state,
    zip
  } = req.body;
  console.log(req.body);
  let client = await req.app
    .get("db")
    .edit_user([
      first_name,
      last_name,
      +primary_number,
      +secondary_number,
      address,
      city,
      state,
      zip,
      req.session.user.client_id
    ])
    .catch(error => console.log(error));
  res.status(200).json(client[0]);
};
const editPets = async (req, res) => {
  let pets = await req.app
    .get("db")
    .edit_pets([
      req.body.dog_id,
      req.body.name,
      req.body.picture,
      req.body.breed,
      req.body.birthday,
      req.body.weight,
      req.body.color,
      req.body.feeding,
      +req.session.user.client_id
    ])
    .catch(error => console.log(error));
  res.status(200).json(pets);
};
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRECT_ACCESS_KEY
});

AWS.config.setPromisesDependency(bluebird);
const s3 = new AWS.S3();
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: "public-read",
    Body: buffer,
    Bucket: BUCKET_NAME,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};
const uploadFiles = (request, response) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) throw new Error(error);
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `bucketFolder/${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);
      console.log(data);
      return response.status(200).send(data);
    } catch (error) {
      return response.status(400).send(error);
    }
  });
};

module.exports = {
  login,
  register,
  registerDog,
  getUser,
  logout,
  getPets,
  editUser,
  editPets,
  uploadFiles
};
