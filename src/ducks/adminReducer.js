import axios from "axios";

const initialState = {
  allPending: [],
  allConfirmed: [],
  allHistory: [],
  occupied: [],
  kennelDisplay: []
};

const GET_ALL_PENDING = "GET_ALL_PENDING";
const GET_OCCUPIED = "GET_OCCUPIED";
const MOVE_TO_CONFIRMED = "MOVE_TO_CONFIRMED";
const DELETE_FROM_ALL_PENDING = "DELETE_FROM_ALL_PENDING";

export function getAllPending() {
  return {
    type: GET_ALL_PENDING,
    payload: axios.get("/api/admin/pending")
  };
}

export function getOccupied(start, end) {
  return {
    type: GET_OCCUPIED,
    payload: axios.post("/api/admin/occupied", { start, end })
  };
}
export function moveToConfirmed(reservation) {
  return {
    type: MOVE_TO_CONFIRMED,
    payload: axios.post("/api/admin/confirmed", reservation)
  };
}
export function deleteFromAllPending(id) {
  return {
    type: DELETE_FROM_ALL_PENDING,
    payload: axios.delete(`/api/admin/pending/${id}`)
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_PENDING}_FULFILLED`:
      return {
        ...state,
        allPending: action.payload.data
      };
    case `${GET_OCCUPIED}_FULFILLED`:
      return {
        ...state,
        occupied: action.payload.data
      };
    case `${MOVE_TO_CONFIRMED}_FULFILLED`:
      return {
        ...state,
        allConfirmed: action.payload.data
      };
    case `${DELETE_FROM_ALL_PENDING}_FULFILLED`:
      return {
        ...state,
        allPending: action.payload.data
      };
    default:
      return state;
  }
}
