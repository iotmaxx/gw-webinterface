/*
 * @Script: reducers.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-08-17 13:15:14
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-10 11:47:37
 * @Description: This is description.
 */

import { SUCCESS_SET_MODEM, SUCCESS_GET_MODEM_INFO } from './constants';

const initialState = {
  GPP: {
    operatorname: '',
    imei: '',
  },
  Status: {
    state: '',
    signalquality: '',
    powerstate: '',
  },
};

function GsmReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_SET_MODEM:
      break;
    case SUCCESS_GET_MODEM_INFO:
      return {
        ...state,
        ...action.modemInfo,
      };
    default:
      return state;
  }
}

export default GsmReducer;
