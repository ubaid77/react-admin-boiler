import { SET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  error: null,
  status: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        error: action.payload.msg,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        error: null,
        status: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
