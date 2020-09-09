import {
  SUCCESS_SET_ADDRESS,
  SUCCESS_SET_HOSTNAME,
  SUCCESS_SET_MTU,
  SUCCESS_GET_ADDRESS,
  SUCCESS_SET_IPV6_ADDRESS,
} from './constants';

const initialState = {
  mtu: '',
  hostname: '',
  ipAddress: '',
  subnetMask: '',
  ipv6Address: '',
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
    case SUCCESS_SET_IPV6_ADDRESS:
      return {
        ...state,
        ipv6Address: action.ipv6Address,
      };
    default:
      return state;
  }
}

export default LocalNetworkReducer;
