import * as actionTypes from '../types/actionTypes';

const initialState = {
  data: '',
  message: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DATA_REQUEST_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        message: action.payload.message,
        loading: false,
      };
    case actionTypes.DATA_REQUEST_ERROR:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case actionTypes.RESET:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
