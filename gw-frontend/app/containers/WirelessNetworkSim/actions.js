/*
 * @Script: actions.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-08-17 13:05:00
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-08-17 15:46:34
 * @Description: This is description.
 */

import {
  SET_MODEM,
  GET_MODEM_INFO,
  SUCCESS_SET_MODEM,
  SUCCESS_GET_MODEM_INFO,
} from './constants';

export function setModem(operatorApn, pin, username, password) {
  return {
    type: SET_MODEM,
    operatorApn,
    pin,
    username,
    password,
  };
}

export function getModemInfo() {
  return {
    type: GET_MODEM_INFO,
  };
}

export function successSetModem() {
  return {
    type: SUCCESS_SET_MODEM,
  };
}

export function successGetModemInfo() {
  return {
    type: SUCCESS_GET_MODEM_INFO,
  };
}
