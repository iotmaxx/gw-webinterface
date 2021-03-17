/*
 * @Script: saga.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-14 17:14:05
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-14 17:14:05
 * @Description: This is description.
 */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import {
  SET_DOMAIN_NAME,
  SET_BEGIN_IP_RANGE,
  SET_END_IP_RANGE,
  SET_LEASE_TIME,
  SET_ENABLE_DHCP_SERVER,
  GET_DHCP_CONFIG,
  DHCP_PATH_SUFFIX,
} from './constants';

import {
  successSetDomainName,
  successSetBeginIpRange,
  successSetEndIpRange,
  successSetLeaseTime,
  successSetEnableDHCPServer,
  successGetDhcpConfig,  
} from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';
import { setSuccess, setError } from '../App/actions';

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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
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
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
  }
}

export function* getDhcpConfig() {
  try {
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}config`;
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
    yield put(
      successGetDhcpConfig(
        response.domainName,
        response.beginIpRange,
        response.endIpRange,
        response.leaseTime,
        response.enableDHCPServer,
      ),
    );
  } catch (error) {
    console.log(error);
  }
}

export function* setEnableDHCPServer({ enableDHCPServer }) {
  try {
    const data = { enableDHCPServer };
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}enableDHCPServer`;
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
    yield put(successSetEnableDHCPServer(response.enableDHCPServer));
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
  }
}

// Root saga
export default function* rootSaga() {
  yield [
    yield takeLatest(SET_DOMAIN_NAME, setDomainName),
    yield takeLatest(SET_BEGIN_IP_RANGE, setBeginIpRange),
    yield takeLatest(SET_END_IP_RANGE, setEndIpRange),
    yield takeLatest(SET_LEASE_TIME, setLeaseTime),
    yield takeLatest(SET_ENABLE_DHCP_SERVER, setEnableDHCPServer),
    yield takeLatest(GET_DHCP_CONFIG, getDhcpConfig),
  ];
}
