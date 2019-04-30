import axios from "axios";

const initialState = {
  username: "",
  password: "",
  client: {},
  pets: []
};

const GET_USER = "GET_USER";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const REGISTER_DOG = "REGISTER_DOG";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export function register(
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
) {
  return {
    type: REGISTER,
    payload: axios
      .post("/api/register", {
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
      })
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}

export function registerDog(
  name,
  picture,
  breed,
  birthday,
  weight,
  color,
  feeding,
  client_id
) {
  return {
    type: REGISTER_DOG,
    payload: axios
      .post("/api/pets", {
        name,
        picture,
        breed,
        birthday,
        weight,
        color,
        feeding,
        client_id
      })
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios
      .post("/api/login", { username, password })
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function updateUsername(val) {
  return {
    type: UPDATE_USERNAME,
    payload: val
  };
}
export function updatePassword(val) {
  return {
    type: UPDATE_PASSWORD,
    payload: val
  };
}
export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/user")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        client: action.payload
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        client: action.payload
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        password: "",
        username: "",
        client: action.payload
      };
    case `${REGISTER_DOG}_FULFILLED`:
      return {
        ...state,
        pets: action.payload
      };
    case "UPDATE_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "UPDATE_PASSWORD":
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
}
