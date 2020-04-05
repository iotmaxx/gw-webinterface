import {
  SET_HOSTNAME,
  SET_ADDRESS,
  SET_MTU,
  LOCAL_NETWORK_PATH_SUFFIX,
} from './constants';

import {
  successSetHostname,
  successSetMTU,
  successSetAddress,
} from './actions';

import { API_URL, LOGIN_ERROR, ACCESS_TOKEN } from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

export function* setHostname({ hostname }) {
  try {
    const data = { hostname };
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}hostname`;
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
    yield put(successSetHostname(response.hostname));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

export function* setAddress({ ipAddress, subnetMask }) {
  try {
    const data = { ipAddress, subnetMask };
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}address`;
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
    yield put(successSetAddress(response.ipAddress, response.subnetMask));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

export function* setMTU({ mtu }) {
  try {
    const data = { mtu };
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}mtu`;
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
    yield put(successSetMTU(response.mtu));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

// Root saga
export default function* rootSaga() {
  yield [
    yield takeLatest(SET_HOSTNAME, setHostname),
    yield takeLatest(SET_ADDRESS, setAddress),
    yield takeLatest(SET_MTU, setMTU),
  ];
}
