import { combineReducers } from "redux";
import AuthReducer from "Auth/redux/reducers";
import errorReducer from "./errorReducer";

export default combineReducers({
  ...AuthReducer,
  error: errorReducer,
});
