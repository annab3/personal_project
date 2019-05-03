import axios from "axios";

const initialState = {
  pending: [],
  confirmed: [],
  history: [],
  clients: [],
  pets: []
};

const GET_ALL_PENDING = "GET_ALL_PENDING";

export function getAllPending() {
  return {
    type: GET_ALL_PENDING,
    payload: axios
      .get("/api/admin/pending")
      .then(res => res.data)
      .catch(error => console.log(error))
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_PENDING}_FULFILLED`:
      return {
        ...state,
        pending: action.payload
      };
    default:
      return state;
  }
}
