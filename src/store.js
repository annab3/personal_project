import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./ducks/authReducer";
import resReducer from "./ducks/resReducer";
import adminReducer from "./ducks/adminReducer";

let rootReducer = combineReducers({ authReducer, resReducer, adminReducer });

export default createStore(rootReducer, applyMiddleware(promise));
