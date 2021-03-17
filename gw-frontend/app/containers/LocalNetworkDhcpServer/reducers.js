import {
  SUCCESS_SET_DOMAIN_NAME,
  SUCCESS_SET_BEGIN_IP_RANGE,
  SUCCESS_SET_END_IP_RANGE,
  SUCCESS_SET_LEASE_TIME,
  SUCCESS_ENABLE_DHCP_SERVER,
  SUCCESS_GET_DHCP_CONFIG,
} from './constants';

const initialState = {
  domainName: 'localhost',
  beginIpRange: '1',
  endIpRange: '254',
  leaseTime: '7200',
  enableDHCPServer: true,
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
    case SUCCESS_ENABLE_DHCP_SERVER:
      return { ...state, enableDHCPServer: action.enableDHCPServer };
    case SUCCESS_GET_DHCP_CONFIG:
      return {
        ...state,
        domainName: action.domainName,
        beginIpRange: action.beginIpRange,
        endIpRange: action.endIpRange,
        leaseTime: action.leaseTime,
        enableDHCPServer: action.enableDHCPServer,
      };
    default:
      return state;
  }
}

export default LocalDhcpServerReducer;
