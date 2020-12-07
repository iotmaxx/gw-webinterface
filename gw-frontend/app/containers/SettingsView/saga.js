/*
 * @Script: saga.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-11-18 17:51:24
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-11-18 18:00:15
 * @Description: This is description.
 */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_SETTINGS, SET_PASSWORD } from './constants';

import {
  getSettingsSuccess,
  getSettingsError,
  setPasswordError,
  setPasswordSuccess,
} from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';
import { setError, setSuccess } from '../App/actions';

export function* getSettings() {
  try {
    const requestURL = `${API_URL}auth/login`;
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = yield call(request, requestURL, options);
    yield put(getSettingsSuccess(response.user));
  } catch (error) {
    console.log(error);
    yield put(getSettingsError());
  }
}

export function* setPassword({ password }) {
  try {
    const data = { password };
    const requestURL = `${API_URL}auth/reset_password`;
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = yield call(request, requestURL, options);
    if (response.success === true) {
      yield put(setPasswordSuccess());
      yield put(setSuccess());
    } else {
      yield put(setPasswordError());
    }
    yield put(setError());
  } catch (error) {
    console.log(error);
    yield put(setPasswordError());
    yield put(setError());
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(GET_SETTINGS, getSettings),
    takeLatest(SET_PASSWORD, setPassword),
  ];
}
