import { GET_SYSTEM_INFO, ERROR_RECEIVING_SYSTEM_INFO } from './constants';

import { receivedSystemInfo } from './actions';

import { API_URL, ACCESS_TOKEN } from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

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
