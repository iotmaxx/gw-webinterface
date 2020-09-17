/*
 * @Script: reducers.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-16 00:51:58
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-17 15:46:40
 * @Description: This is description.
 */

import { SUCCESS_GET_NETWORK_INFO } from './constants';

const initialState = {
  lan: {
    lanIpAddress: '',
    lanSubnetMask: '',
    lanIpv6Address: '',
  },
  wan: {
    wanIpAddress: 'N/A',
    wanSubnetMask: 'N/A',
    wanIpv6Address: 'N/A',
  },
};

function StatusNetworkConnectionsReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_NETWORK_INFO:
      return {
        ...state,
        lanIpAddress: action.payload.lan.ipAddress,
        lanSubnetMask: action.payload.lan.subnetMask,
        lanIpv6Address: action.payload.lan.ipv6Address,
        wanIpAddress: action.payload.wan.ipAddress,
        wanSubnetMask: action.payload.wan.subnetMask,
        wanIpv6Address: action.payload.wan.ipv6Address,
      };
    default:
      return state;
  }
}

export default StatusNetworkConnectionsReducer;
