/*
 * @Script: saga.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-09-14 17:16:19
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-09-14 17:16:19
 * @Description: This is description.
 */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_SYSTEM_INFO, ERROR_RECEIVING_SYSTEM_INFO } from './constants';

import { receivedSystemInfo } from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';

export function* getSystemInfo() {
  try {
    const requestURL = `${API_URL}system/info`;
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const systemInfo = yield call(request, requestURL, options);
    yield put(receivedSystemInfo(systemInfo));
  } catch (error) {
    yield put({ type: ERROR_RECEIVING_SYSTEM_INFO, error });
  }
}

// Root saga
export default function* rootSaga() {
  yield [yield takeLatest(GET_SYSTEM_INFO, getSystemInfo)];
}
