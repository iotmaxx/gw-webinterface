/*
 * @Script: reducers.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-16 00:51:58
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-16 00:57:31
 * @Description: This is description.
 */

import { SUCCESS_GET_NETWORK_INFO } from './constants';

const initialState = {
  ipAddress: '',
  subnetMask: '',
  ipv6Address: '',
};

function StatusNetworkConnectionsReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_NETWORK_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default StatusNetworkConnectionsReducer;
