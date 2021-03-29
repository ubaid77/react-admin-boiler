import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  SET_USER,
  REGISTER_USER_ERROR,
  LOGIN_USER_ERROR,
  SET_USER_ERROR,
  AUTH_LOADING,
  SET_USER_LOADING,
  LOGOUT_USER,
} from "../actions/types";

const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("token") ? true : false,
  auth_loading: false,
  user_loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        auth_loading: false,
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.data.tokens.access);
      localStorage.setItem("refresh_token", action.payload.data.tokens.refresh);
      return {
        ...state,
        isLoggedIn: true,
        auth_loading: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        user_loading: false,
      };
    case REGISTER_USER_ERROR:
    case LOGIN_USER_ERROR:
    case SET_USER_ERROR:
    case LOGOUT_USER:
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      return {
        user: null,
        isLoggedIn: false,
        user_loading: false,
        auth_loading: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        auth_loading: true,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        user_loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
