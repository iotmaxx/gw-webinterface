import {
    SET_SOMETING,
    LOCAL_NETWORK_PATH_SUFFIX
  } from './constants';

import {
    API_URL
} from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

function* setSomething({someting}) {
    try {
        const data = {someting};
        const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}someting`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        };
        const response = yield call(request, requestURL, options);
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

// Root saga
export default function* rootSaga() {
    yield [
        yield takeLatest(SET_SOMETING, setSomething)
    ];
}