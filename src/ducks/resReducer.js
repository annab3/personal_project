import axios from "axios";

const initialState = {
  pending: [],
  confirmed: [],
  history: []
};

const GET_PENDING = "GET_PENDING";
const GET_CONFIRMED = "GET_CONFIRMED";
const GET_HISTORY = "GET_HISTORY";
const DELETE_PENDING = "DELETE_PENDING";
const DELETE_CONFIRMED = "DELETE_CONFIRMED";
const ADD_PENDING = "ADD_PENDING";

export function getPending() {
  return {
    type: GET_PENDING,
    payload: axios
      .get("/api/pending")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function getConfirmed() {
  return {
    type: GET_CONFIRMED,
    payload: axios
      .get("/api/confirmed")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function getHistory() {
  return {
    type: GET_HISTORY,
    payload: axios
      .get("/api/history")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function deletePending(id) {
  return {
    type: DELETE_PENDING,
    payload: axios
      .delete(`/api/pending/${id}`)
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function deleteConfirmed(id) {
  return {
    type: DELETE_CONFIRMED,
    payload: axios
      .delete(`/api/confirmed/${id}`)
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}
export function addPending(start_date, end_date, dog_id) {
  return {
    type: ADD_PENDING,
    payload: axios
      .post("/api/pending", { start_date, end_date, dog_id })
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PENDING}_FULFILLED`:
      return {
        ...state,
        pending: action.payload
      };
    case `${GET_CONFIRMED}_FULFILLED`:
      return {
        ...state,
        confirmed: action.payload
      };
    case `${GET_HISTORY}_FULFILLED`:
      return {
        ...state,
        history: action.payload
      };
    case `${DELETE_PENDING}_FULFILLED`:
      return {
        ...state,
        pending: action.payload
      };
    case `${DELETE_CONFIRMED}_FULFILLED`:
      return {
        ...state,
        confirmed: action.payload
      };
    case `${ADD_PENDING}_FULFILLED`:
      return {
        ...state,
        pending: action.payload
      };
    default:
      return state;
  }
}
