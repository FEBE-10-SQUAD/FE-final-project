import { combineReducers } from "redux";
import { applyReducer } from "./a-reducer";

const reducers = combineReducers({ apply: applyReducer });

export default reducers;
