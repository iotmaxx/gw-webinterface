import { LOGIN, LOGOUT, LOGIN_SUCCESS } from './constants';

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
