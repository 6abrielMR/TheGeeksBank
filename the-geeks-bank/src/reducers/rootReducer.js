import { combineReducers } from "redux";
import { summationReducer } from "./summationReducer";

export const rootReducer = combineReducers({
  summation: summationReducer,
});
