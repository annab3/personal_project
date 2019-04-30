import axios from "axios";

const initialState = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  primary_phone: 0,
  secondary_phone: 0,
  address: "",
  city: "",
  state: "",
  zip: 0,
  client: {}
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_PRIMARY_PHONE = "UPDATE_PRIMARY_PHONE";
const UPDATE_SECONDARY_PHONE = "UPDATE_SECONDARY_PHONE";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";

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
export function updateFirstName(val) {
  return {
    type: UPDATE_FIRST_NAME,
    payload: val
  };
}
export function updateLastName(val) {
  return {
    type: UPDATE_LAST_NAME,
    payload: val
  };
}
export function updatePrimaryPhone(val) {
  return {
    type: UPDATE_PRIMARY_PHONE,
    payload: val
  };
}
export function updateSecondaryPhone(val) {
  return {
    type: UPDATE_SECONDARY_PHONE,
    payload: val
  };
}
export function updateAddress(val) {
  return {
    type: UPDATE_ADDRESS,
    payload: val
  };
}
export function updateCity(val) {
  return {
    type: UPDATE_CITY,
    payload: val
  };
}
export function updateState(val) {
  return {
    type: UPDATE_STATE,
    payload: val
  };
}
export function updateZip(val) {
  return {
    type: UPDATE_ZIP,
    payload: val
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        primary_phone: 0,
        secondary_phone: 0,
        address: "",
        city: "",
        state: "",
        zip: 0,
        client: action.payload
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        primary_phone: 0,
        secondary_phone: 0,
        address: "",
        city: "",
        state: "",
        zip: 0,
        client: action.payload
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
    case "UPDATE_FIRST_NAME":
      return {
        ...state,
        first_name: action.payload
      };
    case "UPDATE_LAST_NAME":
      return {
        ...state,
        last_name: action.payload
      };
    case "UPDATE_PRIMARY_PHONE":
      return {
        ...state,
        primary_phone: action.payload
      };
    case "UPDATE_SECONDARY_PHONE":
      return {
        ...state,
        secondary_phone: action.payload
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: action.payload
      };
    case "UPDATE_CITY":
      return {
        ...state,
        city: action.payload
      };
    case "UPDATE_STATE":
      return {
        ...state,
        state: action.payload
      };
    case "UPDATE_ZIP":
      return {
        ...state,
        zip: action.payload
      };

    default:
      return state;
  }
}
