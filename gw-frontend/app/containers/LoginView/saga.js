import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    API_URL,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    ROUTES
} from '../App/constants';

import {
    loginSuccess
} from '../App/actions';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';
import history from 'utils/history';

function* login({username, password}) {
    try {
        const data = {username, password};
        const requestURL = `${API_URL}auth/login`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        };
        const user = yield call(request, requestURL, options);
        localStorage.setItem(ACCESS_TOKEN, user.access);
        localStorage.setItem(REFRESH_TOKEN, user.refresh);
        history.push(ROUTES.dashboard);
        yield put({type: 'LOGIN_SUCCESS'})
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    window.location.reload();
}

// Root saga
export default function* rootSaga() {
    yield [
        yield takeLatest(LOGIN, login),
        yield takeLatest(LOGOUT, logout)
    ];
}