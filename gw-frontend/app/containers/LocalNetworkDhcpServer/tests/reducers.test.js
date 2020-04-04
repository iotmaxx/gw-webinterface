import LocalDhcpServerReducer from '../reducers';
import {
  successSetDomainName,
  successSetBeginIpRange,
  successSetEndIpRange,
  successSetLeaseTime,
} from '../actions';

describe('LocalDhcpServerReducer', () => {
  it('returns the initial state', () => {
    const initialState = {
      domainName: 'localhost',
      beginIpRange: '127.0.0.1',
      endIpRange: '127.0.0.254',
      leaseTime: '1d',
    };
    expect(LocalDhcpServerReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the new domain name', () => {
    const domainName = 'localhost';
    expect(
      LocalDhcpServerReducer({}, successSetDomainName(domainName)),
    ).toEqual({
      domainName,
    });
  });
  it('returns the new begin of ip range', () => {
    const beginIpRange = '127.0.0.1';
    expect(
      LocalDhcpServerReducer({}, successSetBeginIpRange(beginIpRange)),
    ).toEqual({
      beginIpRange,
    });
  });
  it('returns the new end of ip range', () => {
    const endIpRange = '127.0.0.254';
    expect(
      LocalDhcpServerReducer({}, successSetEndIpRange(endIpRange)),
    ).toEqual({
      endIpRange,
    });
  });
  it('returns the new lease time', () => {
    const leaseTime = '1d 12h 30m';
    expect(LocalDhcpServerReducer({}, successSetLeaseTime(leaseTime))).toEqual({
      leaseTime,
    });
  });
});
