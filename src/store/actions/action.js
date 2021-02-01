import restCall from '../../utils/fetch-util';
import * as actionTypes from '../types/actionTypes';

export const funnelAction = (data) => {
  return async function (dispatch) {
    await restCall({
      data,
      startType: actionTypes.DATA_REQUEST_STARTED,
      successType: actionTypes.DATA_REQUEST_FULFILLED,
      errorType: actionTypes.DATA_REQUEST_ERROR,
      dispatch,
    });
  };
};
