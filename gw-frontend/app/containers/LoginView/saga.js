import {
  LOGIN,
  LOGOUT,
  API_URL,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  ROUTES,
} from '../App/constants';

import { loginSuccess, setSuccess, setError } from '../App/actions';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';
import history from 'utils/history';

export function* login({ username, password }) {
  try {
    const data = { username, password };
    const requestURL = `${API_URL}auth/login`;
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const token_pair = yield call(request, requestURL, options);
    localStorage.setItem(ACCESS_TOKEN, token_pair.access);
    localStorage.setItem(REFRESH_TOKEN, token_pair.refresh);
    history.push(ROUTES.dashboard);
    yield put(loginSuccess());
    yield put(setSuccess());
  } catch (error) {
    console.log(error);
    yield put(setError());
  }
}

function* logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  history.push(ROUTES.login);
}

// Root saga
export default function* rootSaga() {
  yield [yield takeLatest(LOGIN, login), yield takeLatest(LOGOUT, logout)];
}
