import axios from "axios";

const initialState = {
  allPending: [],
  allConfirmed: [],
  allHistory: [],
  occupied: [],
  kennelDisplay: []
};

const GET_ALL_PENDING = "GET_ALL_PENDING";
const GET_ALL_CONFIRMED = "GET_ALL_CONFIRMED";
const GET_ALL_HISTORY = "GET_ALL_HISTORY";
const GET_OCCUPIED = "GET_OCCUPIED";

export function getAllPending() {
  return {
    type: GET_ALL_PENDING,
    payload: axios
      .get("/api/admin/pending")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function getAllConfirmed() {
  return {
    type: GET_ALL_CONFIRMED,
    payload: axios
      .get("/api/admin/confirmed")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function getAllHistory() {
  return {
    type: GET_ALL_HISTORY,
    payload: axios
      .get("/api/admin/histroy")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function getOccupied(start, end) {
  return {
    type: GET_OCCUPIED,
    payload: axios
      .post("/api/admin/occupied", { start, end })
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_PENDING}_FULFILLED`:
      return {
        ...state,
        allPending: action.payload
      };
    case `${GET_ALL_CONFIRMED}_FULFILLED`:
      return {
        ...state,
        allConfirmed: action.payload
      };
    case `${GET_ALL_HISTORY}_FULFILLED`:
      return {
        ...state,
        allHistory: action.payload
      };
    case `${GET_OCCUPIED}_FULFILLED`:
      return {
        ...state,
        occupied: action.payload
      };
    default:
      return state;
  }
}
