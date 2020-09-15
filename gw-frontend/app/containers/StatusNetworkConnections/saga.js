/*
 * @Script: saga.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-16 00:58:13
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-16 01:04:54
 * @Description: This is description.
 */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_NETWORK_INFO } from './constants';
import { successGetNetworkInfo } from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';
import { LOCAL_NETWORK_PATH_SUFFIX } from '../LocalNetworkIpConfig/constants';

function* getNetworkInfo() {
  try {
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}address`;
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
    yield put(successGetNetworkInfo(response));
  } catch (error) {
    console.log(error);
  }
}

// Root saga
export default function* rootSaga() {
  yield [yield takeLatest(GET_NETWORK_INFO, getNetworkInfo)];
}
