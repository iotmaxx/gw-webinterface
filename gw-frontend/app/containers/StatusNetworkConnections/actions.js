/*
 * @Script: actions.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-16 00:46:56
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-16 00:57:47
 * @Description: This is description.
 */

import { GET_NETWORK_INFO, SUCCESS_GET_NETWORK_INFO } from './constants';

export function getNetworkInfo() {
  return {
    type: GET_NETWORK_INFO,
  };
}

export function successGetNetworkInfo(networkInfo) {
  return {
    type: SUCCESS_GET_NETWORK_INFO,
    payload: networkInfo,
  };
}
