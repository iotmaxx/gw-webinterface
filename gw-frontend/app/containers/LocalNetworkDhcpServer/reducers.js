import {
  SUCCESS_SET_DOMAIN_NAME,
  SUCCESS_SET_BEGIN_IP_RANGE,
  SUCCESS_SET_END_IP_RANGE,
  SUCCESS_SET_LEASE_TIME,
} from './constants';

const initialState = {
  domainName: 'localhost',
  beginIpRange: '127.0.0.1',
  endIpRange: '127.0.0.254',
  leaseTime: '1d',
};

function LocalDhcpServerReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_SET_DOMAIN_NAME:
      return { ...state, domainName: action.domainName };
    case SUCCESS_SET_BEGIN_IP_RANGE:
      return { ...state, beginIpRange: action.beginIpRange };
    case SUCCESS_SET_END_IP_RANGE:
      return { ...state, endIpRange: action.endIpRange };
    case SUCCESS_SET_LEASE_TIME:
      return { ...state, leaseTime: action.leaseTime };
    default:
      return state;
  }
}

export default LocalDhcpServerReducer;
