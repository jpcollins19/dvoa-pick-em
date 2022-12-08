import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const { teams } = require("./teams_store");

const reducer = combineReducers({ teams });
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;
export * from "./teams_store";
export * from "./funcs";
