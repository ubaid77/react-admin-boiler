export const ACTIONS = {
  SET_ERRORS: "ERRORS/SET_ERRORS",
  CLEAR_ERRORS: "ERRORS/CLEAR_ERRORS",
};

interface ErrorPayload {
  msg: string;
  status: number;
}

interface ReturnError {
  type: typeof ACTIONS.SET_ERRORS;
  payload: ErrorPayload;
}

interface ClearErrors {
  type: typeof ACTIONS.CLEAR_ERRORS;
  payload: null;
}

export type ErrorActionTypes = ReturnError | ClearErrors;
