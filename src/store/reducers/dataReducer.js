import * as actionTypes from '../types/actionTypes';

const initialState = {
  data: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_REQUEST_STARTED:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.DATA_REQUEST_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.DATA_REQUEST_ERROR:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
