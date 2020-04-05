import { call, put } from 'redux-saga/effects';
import { API_URL, ACCESS_TOKEN } from '../../App/constants';
import {
  setDomainName,
  setBeginIpRange,
  setEndIpRange,
  setLeaseTime,
} from '../saga';
import {
  successSetDomainName,
  successSetBeginIpRange,
  successSetEndIpRange,
  successSetLeaseTime,
} from '../actions';
import { DHCP_PATH_SUFFIX } from '../constants';
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

describe('LocalNetworkDhcpServer saga', () => {
  it('tests setDomainName saga', () => {
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}domainName`;
    const domainName = { domainName: 'domain' };
    const options = makeBody(domainName);
    const setDomainNameSaga = setDomainName(domainName);
    const response = {
      domainName: 'domainName',
    };
    let result;
    result = setDomainNameSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setDomainNameSaga.next(response);
    expect(result.value).toEqual(put(successSetDomainName(response.domainName)));
  });
  it('tests setBeginIpRange saga', () => {
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}beginIpRange`;
    const beginIpRange = { beginIpRange: '127.0.0.1' };
    const options = makeBody(beginIpRange);
    const setBeginIpRangeSaga = setBeginIpRange(beginIpRange);
    const response = {
      beginIpRange: beginIpRange.beginIpRange,
    };
    let result;
    result = setBeginIpRangeSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setBeginIpRangeSaga.next(response);
    expect(result.value).toEqual(put(successSetBeginIpRange(response.beginIpRange)));
  });
  it('tests setEndIpRange saga', () => {
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}endIpRange`;
    const endIpRange = { endIpRange: '127.0.0.254' };
    const options = makeBody(endIpRange);
    const setEndIpRangeSaga = setEndIpRange(endIpRange);
    const response = {
        endIpRange: endIpRange.endIpRange,
    };
    let result;
    result = setEndIpRangeSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setEndIpRangeSaga.next(response);
    expect(result.value).toEqual(put(successSetEndIpRange(response.endIpRange)));
  });
  it('tests setLeaseTime saga', () => {
    const requestURL = `${API_URL}${DHCP_PATH_SUFFIX}leaseTime`;
    const leaseTime = { leaseTime: '1d 12h' };
    const options = makeBody(leaseTime);
    const setLeaseTimeSaga = setLeaseTime(leaseTime);
    const response = {
        leaseTime: leaseTime.leaseTime,
    };
    let result;
    result = setLeaseTimeSaga.next();
    expect(result.value).toEqual(call(request, requestURL, options));
    result = setLeaseTimeSaga.next(response);
    expect(result.value).toEqual(put(successSetLeaseTime(response.leaseTime)));
  });
});
