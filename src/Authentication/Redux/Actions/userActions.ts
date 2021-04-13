import { ACTIONS } from "Authentication/Interfaces/ActionTypes/AuthActionTypes";
import { returnError, clearErrors } from "redux/actions/errorActions";
import AXIOS from "config/axios";
import { baseUrl } from "constants/defaultValues";
import { History } from "history";

export const registerUser = (
  email: string,
  username: string,
  password: string,
  history: History
) => async (dispatch: Function) => {
  try {
    dispatch(clearErrors());
    dispatch({ type: ACTIONS.AUTH_LOADING });
    await AXIOS.post(`${baseUrl}/auth/register/`, {
      email,
      username,
      password,
    });
    dispatch({ type: ACTIONS.REGISTER_USER_SUCCESS });
    history.push("/user");
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(returnError("Something Went Wrong!", 500));
    } else {
      dispatch(returnError(err.response.data.error, err.response.status));
    }
    dispatch({ type: ACTIONS.REGISTER_USER_ERROR });
  }
};

export const loginUser = (
  email: string,
  password: string,
  history: History
) => async (dispatch: Function) => {
  try {
    dispatch(clearErrors());
    dispatch({ type: ACTIONS.AUTH_LOADING });
    const { data } = await AXIOS.post(`${baseUrl}/auth/login/`, {
      email,
      password,
    });
    dispatch({ type: ACTIONS.LOGIN_USER_SUCCESS, payload: data.data });
    history.push("/app");
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(returnError("Something Went Wrong!", 500));
    } else {
      dispatch(returnError(err.response.data.error, err.response.status));
    }
    dispatch({ type: ACTIONS.LOGIN_USER_ERROR });
  }
};

export const setUser = () => async (dispatch: Function) => {
  try {
    dispatch({ type: ACTIONS.SET_USER_LOADING });

    const { data } = await AXIOS.get(`${baseUrl}/users/profile/`);

    dispatch({ type: ACTIONS.SET_USER, payload: data });
  } catch (err) {
    dispatch({ type: ACTIONS.SET_USER_ERROR });
  }
};

export const logoutUser = () => async (dispatch: Function) => {
  dispatch(clearErrors());
  dispatch({ type: ACTIONS.LOGOUT_USER });
};
