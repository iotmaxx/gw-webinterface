import {
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_ERROR,
  SET_PASSWORD,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,
} from './constants';

export function getSettings() {
  return {
    type: GET_SETTINGS,
  };
}

export function getSettingsSuccess() {
  return {
    type: GET_SETTINGS_SUCCESS,
  };
}

export function getSettingsError() {
  return {
    type: GET_SETTINGS_ERROR,
  };
}

export function setPassword() {
  return {
    type: SET_PASSWORD,
  };
}

export function setPasswordSuccess() {
  return {
    type: SET_PASSWORD_SUCCESS,
  };
}

export function setPasswordError() {
  return {
    type: SET_PASSWORD_ERROR,
  };
}