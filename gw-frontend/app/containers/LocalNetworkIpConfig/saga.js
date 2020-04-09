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

import { API_URL, ACCESS_TOKEN } from '../App/constants';
import { setError, setSuccess } from '../App/actions';

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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
  }
}

export function* setAddress({ipAddress, subnetMask, oldAddress}) {
  try {
    const data = { ipAddress, subnetMask, oldAddress };
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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
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
