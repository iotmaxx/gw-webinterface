import {
  setAddress,
  setHostname,
  setMTU,
  successSetAddress,
  successSetHostname,
  successSetMTU,
} from '../actions';
import {
  SET_ADDRESS,
  SET_HOSTNAME,
  SET_MTU,
  SUCCESS_SET_ADDRESS,
  SUCCESS_SET_HOSTNAME,
  SUCCESS_SET_MTU,
} from '../constants';

describe('Actions of LocalNetworkIpConfig', () => {
  it('returns SET_ADDRESS', () => {
    const ipAddress = '127.0.0.1';
    const subnetMask = '255.255.255.0';
    expect(setAddress(ipAddress, subnetMask)).toEqual({
        type: SET_ADDRESS,
        ipAddress,
        subnetMask
    });
  });
  it('returns SET_HOSTNAME', () => {
    const hostname = 'newHostname';
    expect(setHostname(hostname)).toEqual({
        type: SET_HOSTNAME,
        hostname
    });
  });
  it('returns SET_MTU', () => {
    const mtu = 3000;
    expect(setMTU(mtu)).toEqual({
        type: SET_MTU,
        mtu
    });
  });
  it('returns SUCCESS_SET_ADDRESS', () => {
    const ipAddress = '127.0.0.1';
    const subnetMask = '255.255.255.0';
    expect(successSetAddress(ipAddress, subnetMask)).toEqual({
        type: SUCCESS_SET_ADDRESS,
        ipAddress,
        subnetMask
    });
  });
  it('returns SUCCESS_SET_HOSTNAME', () => {
    const hostname = 'newHostname';
    expect(successSetHostname(hostname)).toEqual({
        type: SUCCESS_SET_HOSTNAME,
        hostname
    });
  });
  it('returns SUCCESS_SET_MTU', () => {
    const mtu = 3000;
    expect(successSetMTU(mtu)).toEqual({
        type: SUCCESS_SET_MTU,
        mtu
    });
  });
});
