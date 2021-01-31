import restCall from '../../utils/fetch-util';
import * as actionTypes from '../types/actionTypes';

export const funnelAction = (url) => {
  return async function (dispatch) {
    await restCall({
      url: url,
      method: 'get',
      successType: actionTypes.DATA_REQUEST_FULFILLED,
      errorType: actionTypes.DATA_REQUEST_ERROR,
      dispatch,
    });
  };
};
