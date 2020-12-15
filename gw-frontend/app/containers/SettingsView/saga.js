/*
 * @Script: saga.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-11-18 17:51:24
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-12-15 01:26:54
 * @Description: This is description.
 */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_USER, SET_CREDENTIALS } from './constants';

import {
  getUserSuccess,
  getUserError,
  setCredentialsSuccess,
  setCredentialsError,
} from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';
import { setError, setSuccess } from '../App/actions';

export function* getUser() {
  try {
    const requestURL = `${API_URL}auth/user`;
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
    yield put(getUserSuccess(response.user));
  } catch (error) {
    console.log(error);
    yield put(getUserError());
  }
}

export function* setCredentials({ username, password }) {
  try {
    const data = { username, password };
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
      yield put(setCredentialsSuccess(response.user));
      yield put(setSuccess());
    } else {
      yield put(setCredentialsError());
    }
  } catch (error) {
    console.log(error);
    yield put(setCredentialsError());
    yield put(setError());
  }
}

export default function* rootSaga() {
  yield [
    yield takeLatest(GET_USER, getUser),
    yield takeLatest(SET_CREDENTIALS, setCredentials),
  ];
}
