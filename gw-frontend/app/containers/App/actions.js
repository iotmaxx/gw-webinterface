import { LOGIN, LOGOUT, LOGIN_SUCCESS, SET_ERROR, SET_SUCCESS, DISMISS } from './constants';

export function login(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function setError() {
  return {
    type: SET_ERROR,
  };
}

export function setSuccess() {
  return {
    type: SET_SUCCESS,
  };
}

export function dismiss() {
  return {
    type: DISMISS,
  };
}
