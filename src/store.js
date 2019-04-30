import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./ducks/authReducer";

let rootReducer = combineReducers({ authReducer });

export default createStore(rootReducer, applyMiddleware(promise));
