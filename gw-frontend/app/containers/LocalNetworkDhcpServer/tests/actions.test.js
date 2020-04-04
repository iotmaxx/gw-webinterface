import {
  setDomainName,
  setBeginIpRange,
  setEndIpRange,
  setLeaseTime,
  successSetDomainName,
  successSetBeginIpRange,
  successSetEndIpRange,
  successSetLeaseTime,
} from '../actions';
import {
  SET_DOMAIN_NAME,
  SET_BEGIN_IP_RANGE,
  SET_END_IP_RANGE,
  SET_LEASE_TIME,
  SUCCESS_SET_DOMAIN_NAME,
  SUCCESS_SET_BEGIN_IP_RANGE,
  SUCCESS_SET_END_IP_RANGE,
  SUCCESS_SET_LEASE_TIME,
} from '../constants';

describe('Actions of LocalNetworkDhcpServer', () => {
  it('returns SET_DOMAIN_NAME', () => {
    const domainName = 'newDomain';
    expect(setDomainName(domainName)).toEqual({
      type: SET_DOMAIN_NAME,
      domainName
    });
  });
  it('returns SET_BEGIN_IP_RANGE', () => {
    const beginIpRange = '127.0.0.1';
    expect(setBeginIpRange(beginIpRange)).toEqual({
      type: SET_BEGIN_IP_RANGE,
      beginIpRange
    });
  });
  it('returns SET_END_IP_RANGE', () => {
    const endIpRange = '127.0.0.254';
    expect(setEndIpRange(endIpRange)).toEqual({
      type: SET_END_IP_RANGE,
      endIpRange
    });
  });
  it('returns SET_LEASE_TIME', () => {
    const leaseTime = '1d 12h 30m';
    expect(setLeaseTime(leaseTime)).toEqual({
      type: SET_LEASE_TIME,
      leaseTime
    });
  });
  it('returns SUCCESS_SET_DOMAIN_NAME', () => {
    const domainName = 'successDomain';
    expect(successSetDomainName(domainName)).toEqual({
      type: SUCCESS_SET_DOMAIN_NAME,
      domainName
    });
  });
  it('returns SUCCESS_SET_BEGIN_IP_RANGE', () => {
    const beginIpRange = '127.0.0.1';
    expect(successSetBeginIpRange(beginIpRange)).toEqual({
      type: SUCCESS_SET_BEGIN_IP_RANGE,
      beginIpRange
    });
  });
  it('returns SUCCESS_SET_END_IP_RANGE', () => {
    const endIpRange = '127.0.0.254';
    expect(successSetEndIpRange(endIpRange)).toEqual({
      type: SUCCESS_SET_END_IP_RANGE,
      endIpRange
    });
  });
  it('returns SUCCESS_SET_LEASE_TIME', () => {
    const leaseTime = '1d 12h 30m';
    expect(successSetLeaseTime(leaseTime)).toEqual({
      type: SUCCESS_SET_LEASE_TIME,
      leaseTime
    });
  });
});
