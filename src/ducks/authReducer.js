import axios from "axios";

const initialState = {
  username: "",
  password: "",
  client: {},
  pets: [],
  pet_picture: "",
  client_picture: ""
};

const GET_USER = "GET_USER";
const GET_PETS = "GET_PETS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const REGISTER_DOG = "REGISTER_DOG";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const EDIT_CLIENT = "EDIT_CLIENT";
const EDIT_PETS = "EDIT_PETS";
const UPDATE_PET_PICTURE = "UPDATE_PET_PICTURE";
const UPDATE_CLIENT_PICTURE = "UPDATE_CLIENT_PICTURE";

export function getPets() {
  return {
    type: GET_PETS,
    payload: axios.get(`/api/pets`)
  };
}

export function register(newclient) {
  return {
    type: REGISTER,
    payload: axios.post("/api/register", newclient)
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
    payload: axios.post("/api/pets", {
      name,
      picture,
      breed,
      birthday,
      weight,
      color,
      feeding,
      client_id
    })
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/api/login", { username, password })
  };
}
export function logout() {
  axios.get("/api/logout").catch(error => console.log(error));
  return {
    type: LOGOUT
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
    payload: axios.get("/api/user")
  };
}
export function editClient(client) {
  return {
    type: EDIT_CLIENT,
    payload: axios.put("/api/user", client)
  };
}
export function editPets(pet) {
  return {
    type: EDIT_PETS,
    payload: axios.put("/api/pets", pet)
  };
}
export function updatePetPicture(url) {
  return {
    type: UPDATE_PET_PICTURE,
    payload: url
  };
}
export function updateClietPicture(url) {
  return {
    type: UPDATE_CLIENT_PICTURE,
    payload: url
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PETS}_FULFILLED`:
      return {
        ...state,
        pets: action.payload.data
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        client: action.payload.data
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        client: action.payload.data
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        password: "",
        username: "",
        client: action.payload.data
      };
    case `${LOGIN}_REJECTED`:
      alert("Invalid Username Or Password");
      return state;
    case `${REGISTER_DOG}_FULFILLED`:
      return {
        ...state,
        pets: action.payload.data,
        pet_picture: ""
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        username: "",
        password: "",
        client: {},
        pets: []
      };
    case `${EDIT_CLIENT}_FULFILLED`:
      return {
        ...state,
        client: action.payload.data
      };
    case `${EDIT_PETS}_FULFILLED`:
      return {
        ...state,
        pets: action.payload.data,
        pet_picture: ""
      };
    case UPDATE_PET_PICTURE:
      return {
        ...state,
        pet_picture: action.payload
      };
    case UPDATE_CLIENT_PICTURE:
      return {
        ...state,
        client_picture: action.payload
      };
    default:
      return state;
  }
}
