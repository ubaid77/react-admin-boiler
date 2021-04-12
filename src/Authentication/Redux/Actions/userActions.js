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
} from "Authentication/Redux/Actions/types";
import { returnError, clearErrors } from "redux/actions/errorActions";
import AXIOS from "config/axios";
import { baseUrl } from "constants/defaultValues";

export const registerUser = (email, username, password, history) => async (
  dispatch
) => {
  try {
    dispatch(clearErrors());
    dispatch({ type: AUTH_LOADING });
    await AXIOS.post(`${baseUrl}/auth/register/`, {
      email,
      username,
      password,
    });
    dispatch({ type: REGISTER_USER_SUCCESS });
    history.push("/user");
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(returnError("Something Went Wrong!", 500));
    } else {
      dispatch(returnError(err.response.data.error, err.response.status));
    }
    dispatch({ type: REGISTER_USER_ERROR });
  }
};

export const loginUser = (email, password, history) => async (dispatch) => {
  try {
    dispatch(clearErrors());
    dispatch({ type: AUTH_LOADING });
    const { data } = await AXIOS.post(`${baseUrl}/auth/login/`, {
      email,
      password,
    });
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    history.push("/app");
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(returnError("Something Went Wrong!", 500));
    } else {
      dispatch(returnError(err.response.data.error, err.response.status));
    }
    dispatch({ type: LOGIN_USER_ERROR });
  }
};

export const setUser = () => async (dispatch) => {
  try {
    dispatch({ type: SET_USER_LOADING });

    const { data } = await AXIOS.get(`${baseUrl}/users/profile/`);

    dispatch({ type: SET_USER, payload: data });
  } catch (err) {
    dispatch({ type: SET_USER_ERROR });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(clearErrors());
  dispatch({ type: LOGOUT_USER });
};
