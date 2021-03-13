import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_ERROR,
  AUTH_LOADING,
  LOGOUT_USER,
} from "./types";
import { returnError } from "./errorActions";
import axios from "axios";
import { baseUrl } from "../../constants/defaultValues";

export const registerUser = (email, username, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING });
    await axios.post(`${baseUrl}/auth/register/`, {
      email,
      username,
      password,
    });
    dispatch({ type: REGISTER_USER_SUCCESS });
  } catch (err) {
    if (err.response.status === 400) {
      dispatch(returnError(err.response.data.errors, err.response.status));
    } else {
      dispatch(returnError("Something Went Wrong!", 500));
    }
    dispatch({ type: REGISTER_USER_ERROR });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING });
    const { data } = await axios.post(`${baseUrl}/auth/login/`, {
      email,
      password,
    });
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (err) {
    if (err.response.status === 400) {
      dispatch(returnError(err.response.data.errors, err.response.status));
    } else {
      dispatch(returnError("Something Went Wrong!", 500));
    }
    dispatch({ type: LOGIN_USER_ERROR });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
