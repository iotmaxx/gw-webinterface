import {
  SUCCESS_SET_ADDRESS,
  SUCCESS_SET_HOSTNAME,
  SUCCESS_SET_MTU,
  SUCCESS_GET_ADDRESS,
} from './constants';

const initialState = {
  mtu: 1500,
  hostname: 'localhost',
  ipAddress: '127.0.0.1',
  subnetMask: '255.255.255.0',
};

function LocalNetworkReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_SET_MTU:
      return { ...state, mtu: action.mtu };
    case SUCCESS_SET_ADDRESS:
      return {
        ...state,
        ipAddress: action.ipAddress,
        subnetMask: action.subnetMask,
      };
    case SUCCESS_SET_HOSTNAME:
      return {
        ...state,
        hostname: action.hostname,
      };
    case SUCCESS_GET_ADDRESS:
      return {
        ...state,
        hostname: action.hostname,
        mtu: action.mtu,
        ipAddress: action.ipAddress,
        subnetMask: action.subnetMask,
      };
    default:
      return state;
  }
}

export default LocalNetworkReducer;
