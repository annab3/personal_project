import axios from "axios";

const initialState = {
  username: "",
  password: "",
  client: {},
  pets: []
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const REGISTER_PET = "REGISTER_PET";
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

export function registerPet(
  name,
  picture,
  breed,
  birthday,
  weight,
  color,
  feeding
) {
  return {
    type: REGISTER_PET,
    payload: axios
      .post("/api/pets", {
        name,
        picture,
        breed,
        birthday,
        weight,
        color,
        feeding
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
    case `${REGISTER_PET}_FULFILLED`:
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
