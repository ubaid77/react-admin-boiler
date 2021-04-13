import { User } from "Authentication/Interfaces/StateTypes";

export const ACTIONS = {
  REGISTER_USER_SUCCESS: "AUTH/REGISTER_USER_SUCCESS",
  LOGIN_USER_SUCCESS: "AUTH/LOGIN_USER_SUCCESS",
  SET_USER: "AUTH/SET_USER",
  LOGOUT_USER: "AUTH/LOGOUT_USER",
  REGISTER_USER_ERROR: "AUTH/REGISTER_USER_ERROR",
  LOGIN_USER_ERROR: "AUTH/LOGIN_USER_ERROR",
  SET_USER_ERROR: "AUTH/SET_USER_ERROR",
  AUTH_LOADING: "AUTH/AUTH_LOADING",
  SET_USER_LOADING: "AUTH/SET_USER_LOADING",
};

interface AuthPayload extends User {
  tokens: Tokens;
}
interface Tokens {
  access: string;
  refresh: string;
}

interface RegisterUserSuccess {
  type: typeof ACTIONS.REGISTER_USER_SUCCESS;
  payload: null;
}
interface LoginUserSuccess {
  type: typeof ACTIONS.LOGIN_USER_SUCCESS;
  payload: AuthPayload;
}
interface SetUser {
  type: typeof ACTIONS.SET_USER;
  payload: AuthPayload;
}
interface LogoutUser {
  type: typeof ACTIONS.LOGOUT_USER;
  payload: null;
}
interface RegisterUserError {
  type: typeof ACTIONS.REGISTER_USER_ERROR;
  payload: null;
}
interface LoginUserError {
  type: typeof ACTIONS.LOGIN_USER_ERROR;
  payload: null;
}
interface SetUserError {
  type: typeof ACTIONS.SET_USER_ERROR;
  payload: null;
}
interface AuthLoading {
  type: typeof ACTIONS.AUTH_LOADING;
  payload: null;
}
interface SetUserLoading {
  type: typeof ACTIONS.SET_USER_LOADING;
  payload: null;
}

export type AuthActionTypes =
  | RegisterUserSuccess
  | LoginUserSuccess
  | SetUser
  | LogoutUser
  | RegisterUserError
  | LoginUserError
  | SetUserError
  | AuthLoading
  | SetUserLoading;
