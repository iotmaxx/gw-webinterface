import {
    SET_HOSTNAME,
    SET_IP_ADDRESS,
    SET_MTU,
    SET_SUBNETMASK,
    LOCAL_NETWORK_PATH_SUFFIX
} from './constants';

import {
    successSetHostname,
    successSetMTU,
    successSetSubnetmask,
    successSetIpAddress
} from './actions';

import {
    API_URL
} from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

function* setHostname({hostname}) {
    try {
        const data = {hostname};
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
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* setIpAddress({ipAddress, subnetMask}) {
    try {
        const data = {ipAddress, subnetMask};
        const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}ipAddress`;
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
        yield put(successSetIpAddress(response.ipAddress, response.subnetMask));
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* setMTU({mtu}) {
    try {
        const data = {mtu};
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
        yield put(successSetMTU(response.mut));
    } catch(error) {
        console.log(error)
        yield put({type: LOGIN_ERROR, error});
    }
}

function* setSubnetmask({subnetMask}) {
    try {
        const data = {subnetMask};
        const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}subnetMask`;
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
        yield put(successSetSubnetmask(response.subnetMask));
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