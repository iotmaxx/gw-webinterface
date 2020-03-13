import {
    SET_HOSTNAME,
    SET_IP_ADDRESS,
    SET_MTU,
    SET_SUBNETMASK
  } from './constants';

import {
    API_URL
} from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

function* setHostname({hostname}) {
    try {
        const data = {hostname};
        const requestURL = `${API_URL}?`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        };
        //const response = yield call(request, requestURL, options);
        console.log('setHostname');
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* setIpAddress({ipAddress, subnetMask}) {
    try {
        const data = {ipAddress, subnetMask};
        const requestURL = `${API_URL}?`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        };
        //const response = yield call(request, requestURL, options);
        console.log('setIpAddress');
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* setMTU({mtu}) {
    try {
        const data = {mtu};
        const requestURL = `${API_URL}?`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        };
        //const response = yield call(request, requestURL, options);
        console.log('setMTU');
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* setSubnetmask({subnetMask}) {
    try {
        const data = {subnetMask};
        const requestURL = `${API_URL}?`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        };
        //const response = yield call(request, requestURL, options);
        console.log('setSubnetmask');
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

// Root saga
export default function* rootSaga() {
    yield [
        yield takeLatest(SET_HOSTNAME, setHostname),
        yield takeLatest(SET_IP_ADDRESS, setIpAddress),
        yield takeLatest(SET_MTU, setMTU),
        yield takeLatest(SET_SUBNETMASK, setSubnetmask),
    ];
}