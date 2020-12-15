import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_CREDENTIALS,
  SET_CREDENTIALS_SUCCESS,
  SET_CREDENTIALS_ERROR,
  UPDATE_USERNAME,
} from './constants';

export function getUser() {
  return {
    type: GET_USER,
  };
}

export function getUserSuccess(username) {
  return {
    type: GET_USER_SUCCESS,
    username,
  };
}

export function getUserError() {
  return {
    type: GET_USER_ERROR,
  };
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username,
  };
}

export function setCredentials(username, password) {
  return {
    type: SET_CREDENTIALS,
    username,
    password,
  };
}

export function setCredentialsSuccess() {
  return {
    type: SET_CREDENTIALS_SUCCESS,
  };
}

export function setCredentialsError() {
  return {
    type: SET_CREDENTIALS_ERROR,
  };
}
