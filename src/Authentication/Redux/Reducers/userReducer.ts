import {
  ACTIONS,
  AuthActionTypes,
} from "Authentication/Interfaces/ActionTypes/AuthActionTypes";
import AuthInitialState from "Authentication/Interfaces/StateTypes";
const initialState: AuthInitialState = {
  user: null,
  isLoggedIn: localStorage.getItem("token") ? true : false,
  auth_loading: false,
  user_loading: false,
};

const userReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ACTIONS.REGISTER_USER_SUCCESS:
      return {
        ...state,
        auth_loading: false,
      };
    case ACTIONS.LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action!.payload!.tokens.access);
      localStorage.setItem("refresh_token", action!.payload!.tokens.refresh);
      return {
        ...state,
        isLoggedIn: true,
        auth_loading: false,
      };
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        user_loading: false,
      };
    case ACTIONS.REGISTER_USER_ERROR:
    case ACTIONS.LOGIN_USER_ERROR:
    case ACTIONS.SET_USER_ERROR:
    case ACTIONS.LOGOUT_USER:
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      return {
        user: null,
        isLoggedIn: false,
        user_loading: false,
        auth_loading: false,
      };
    case ACTIONS.AUTH_LOADING:
      return {
        ...state,
        auth_loading: true,
      };
    case ACTIONS.SET_USER_LOADING:
      return {
        ...state,
        user_loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
