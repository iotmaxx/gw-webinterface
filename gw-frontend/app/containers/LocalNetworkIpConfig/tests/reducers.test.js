import LocalNetworkReducer from '../reducers';
import {
  successSetAddress,
  successSetHostname,
  successSetMTU,
} from '../actions';

describe('LocalNetworkReducer', () => {
  it('returns the initial state', () => {
    const initialState = {
      mtu: 1500,
      hostname: 'localhost',
      ipAddress: '127.0.0.1',
      subnetMask: '255.255.255.0',
    };
    expect(LocalNetworkReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the new address', () => {
    const ipAddress = '127.0.0.1';
    const subnetMask = '255.255.255.0';
    expect(
      LocalNetworkReducer({}, successSetAddress(ipAddress, subnetMask)),
    ).toEqual({
      ipAddress,
      subnetMask,
    });
  });
  it('returns the new hostname', () => {
    const hostname = 'noLocalhostAnymore';
    expect(LocalNetworkReducer({}, successSetHostname(hostname))).toEqual({
      hostname,
    });
  });
  it('returns the new mtu', () => {
    const mtu = 2500;
    expect(LocalNetworkReducer({}, successSetMTU(mtu))).toEqual({
      mtu,
    });
  });
});
