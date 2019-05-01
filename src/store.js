import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./ducks/authReducer";
import resReducer from "./ducks/resReducer";

let rootReducer = combineReducers({ authReducer, resReducer });

export default createStore(rootReducer, applyMiddleware(promise));
