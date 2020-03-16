import {
    SET_DOMAIN_NAME,
    SET_BEGIN_IP_RANGE,
    SET_END_IP_RANGE,
    SET_LEASE_TIME,
    SET_CLIENT_MAC_ADDRESS,
    SET_CLIENT_IP_ADDRESS,
    LOCAL_NETWORK_PATH_SUFFIX
  } from './constants';

import {
    API_URL
} from '../App/constants';

import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

function* setDomainName({domainName}) {
    try {
        const data = {domainName};
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

function* setBeginIpRange({beginIpRange}) {
    try {
        const data = {beginIpRange};
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

function* setEndIpRange({endIpRange}) {
    try {
        const data = {endIpRange};
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

function* setLeaseTime({leaseTime}) {
    try {
        const data = {leaseTime};
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

function* setClientMacAddress({clientMacAddress}) {
    try {
        const data = {clientMacAddress};
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

function* setClientIpAddress({clientIpAddress}) {
    try {
        const data = {clientIpAddress};
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
        yield takeLatest(SET_DOMAIN_NAME, setDomainName),
        yield takeLatest(SET_BEGIN_IP_RANGE, setBeginIpRange),
        yield takeLatest(SET_END_IP_RANGE, setEndIpRange),
        yield takeLatest(SET_LEASE_TIME, setLeaseTime),
        yield takeLatest(SET_CLIENT_MAC_ADDRESS, setClientMacAddress),
        yield takeLatest(SET_CLIENT_IP_ADDRESS, setClientIpAddress)
    ];
}