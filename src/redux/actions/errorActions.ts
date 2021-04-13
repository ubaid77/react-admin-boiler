import { ACTIONS } from "interfaces/ActionTypes/ErrorActionTypes";

export const returnError = (msg: string, status: number) => {
  return {
    type: ACTIONS.SET_ERRORS,
    payload: { msg, status },
  };
};

export const clearErrors = () => {
  return {
    type: ACTIONS.CLEAR_ERRORS,
  };
};
