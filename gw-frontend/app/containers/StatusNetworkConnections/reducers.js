/*
 * @Script: reducers.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-16 00:51:58
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-17 16:20:02
 * @Description: This is description.
 */

import { SUCCESS_GET_NETWORK_INFO } from './constants';

const initialState = {
  lan: {
    ipAddress: '',
    subnetMask: '',
    ipv6Address: '',
  },
  wan: {
    ipAddress: 'N/A',
    subnetMask: 'N/A',
    ipv6Address: 'N/A',
  },
};

function StatusNetworkConnectionsReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_NETWORK_INFO:
      return {
        ...state,
        lan: {
          ipAddress: action.payload.lan.ipAddress,
          subnetMask: action.payload.lan.subnetMask,
          ipv6Address: action.payload.lan.ipv6Address,
        },
        wan: {
          ipAddress: action.payload.wan.ipAddress,
          subnetMask: action.payload.wan.subnetMask,
          ipv6Address: action.payload.wan.ipv6Address,
        },
      };
    default:
      return state;
  }
}

export default StatusNetworkConnectionsReducer;
