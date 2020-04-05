import {
  SET_DOMAIN_NAME,
  SET_BEGIN_IP_RANGE,
  SET_END_IP_RANGE,
  SET_LEASE_TIME,
  DHCP_PATH_SUFFIX,
} from './constants';

import {
  successSetDomainName,
  successSetBeginIpRange,
  successSetEndIpRange,
  successSetLeaseTime,
} from './actions';

import { API_URL, ACCESS_TOKEN, LOGIN_ERROR } from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

export function* setDomainName({ domainName }) {
  try {
    const data = { domainName };
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}domainName`;
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
    yield put(successSetDomainName(response.domainName));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

export function* setBeginIpRange({ beginIpRange }) {
  try {
    const data = { beginIpRange };
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}beginIpRange`;
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
    yield put(successSetBeginIpRange(response.beginIpRange));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

export function* setEndIpRange({ endIpRange }) {
  try {
    const data = { endIpRange };
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}endIpRange`;
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
    yield put(successSetEndIpRange(response.endIpRange));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

export function* setLeaseTime({ leaseTime }) {
  try {
    const data = { leaseTime };
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}leaseTime`;
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
    yield put(successSetLeaseTime(response.leaseTime));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

// Root saga
export default function* rootSaga() {
  yield [
    yield takeLatest(SET_DOMAIN_NAME, setDomainName),
    yield takeLatest(SET_BEGIN_IP_RANGE, setBeginIpRange),
    yield takeLatest(SET_END_IP_RANGE, setEndIpRange),
    yield takeLatest(SET_LEASE_TIME, setLeaseTime),
  ];
}
