import { combineReducers } from "redux";
import AuthReducer from "Authentication/Redux/Reducers";
import errorReducer from "./errorReducer";

export default combineReducers({
  ...AuthReducer,
  error: errorReducer,
});
