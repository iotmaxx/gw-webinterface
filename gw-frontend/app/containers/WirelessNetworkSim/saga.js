import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { SET_MODEM, GET_MODEM_INFO, GSM_PATH_SUFFIX } from './constants';
import { successGetModemInfo, successSetModem } from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';
import { setError, setSuccess } from '../App/actions';

export function* setModem(conName, operatorApn, pin, username, password) {
  try {
    const data = { conName, operatorApn, pin, username, password };
    const requestURL = `${API_URL}${GSM_PATH_SUFFIX}modem`;
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
    yield call(request, requestURL, options);
    yield put(successSetModem());
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
  }
}

export function* getModemInfo() {
  try {
    const requestURL = `${API_URL}${GSM_PATH_SUFFIX}modem`;
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
    yield put(successGetModemInfo(response));
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
  }
}

// Root Saga
export default function* rootSaga() {
  yield [
    yield takeLatest(SET_MODEM, setModem),
    yield takeLatest(GET_MODEM_INFO, getModemInfo),
  ];
}
