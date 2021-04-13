import {
  ACTIONS,
  ErrorActionTypes,
} from "interfaces/ActionTypes/ErrorActionTypes";
import { Error } from "interfaces/RootStatesTypes";

const initialState: Error = {
  error: null,
  status: null,
};

const errorReducer = (state = initialState, action: ErrorActionTypes) => {
  switch (action.type) {
    case ACTIONS.SET_ERRORS:
      return {
        error: action!.payload!.msg,
        status: action!.payload!.status,
      };
    case ACTIONS.CLEAR_ERRORS:
      return {
        error: null,
        status: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
