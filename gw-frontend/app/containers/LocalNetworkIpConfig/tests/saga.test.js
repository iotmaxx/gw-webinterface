import { call, put } from 'redux-saga/effects';
import { API_URL, ACCESS_TOKEN } from '../../App/constants';
import { setHostname, setAddress, setMTU } from '../saga';
import {
  successSetHostname,
  successSetAddress,
  successSetMTU,
} from '../actions';
import { LOCAL_NETWORK_PATH_SUFFIX } from '../constants';
import request from 'utils/request';

const accessToken = localStorage.getItem(ACCESS_TOKEN);

const makeBody = data => {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

describe('LocalNetworkIpConfig saga', () => {
  it('tests setHostname saga', () => {
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}hostname`;
    const hostname = { hostname: 'host' };
    const options = makeBody(hostname);
    const setHostnameSaga = setHostname(hostname);
    const response = {
      hostname: 'hostname',
    };
    let result;
    result = setHostnameSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setHostnameSaga.next(response);
    expect(result.value).toEqual(put(successSetHostname(response.hostname)));
  });
  it('tests setAddress saga', () => {
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}address`;
    const address = { ipAddress: '127.0.0.1', subnetMask: '255.255.255.0' };
    const options = makeBody(address);
    const setAddressSaga = setAddress(address);
    const response = {
      ipAddress: address.ipAddress,
      subnetMask: address.subnetMask,
    };
    let result;
    result = setAddressSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setAddressSaga.next(response);
    expect(result.value).toEqual(
      put(successSetAddress(response.ipAddress, response.subnetMask)),
    );
  });
  it('tests setMTU saga', () => {
    const requestURL = `${API_URL}${LOCAL_NETWORK_PATH_SUFFIX}mtu`;
    const mtu = { mtu: 3000 };
    const options = makeBody(mtu);
    const setMTUSaga = setMTU(mtu);
    const response = {
      mtu: 3000,
    };
    let result;
    result = setMTUSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setMTUSaga.next(response);
    expect(result.value).toEqual(put(successSetMTU(response.mtu)));
  });
});
