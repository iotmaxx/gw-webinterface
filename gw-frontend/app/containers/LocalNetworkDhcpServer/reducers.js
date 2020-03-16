import {
    SET_DOMAIN_NAME,
    SET_BEGIN_IP_RANGE,
    SET_END_IP_RANGE,
    SET_LEASE_TIME,
    SET_CLIENT_MAC_ADDRESS,
    SET_CLIENT_IP_ADDRESS
} from './constants';
  
  const initialState = {
    domainName: '',
    beginIpRange: '',
    endIpRange: '',
    leaseTime: '',
    clientMacAddress: '',
    clientIpAddress: ''
};

function LocalDhcpServerReducer(state = initialState, action) {
    switch(action.type) {
        case SET_DOMAIN_NAME:
            return {...state, domainName: action.domainName};
        case SET_BEGIN_IP_RANGE:
            return {...state, beginIpRange: action.beginIpRange};
        case SET_END_IP_RANGE:
            return {...state, endIpRange: action.endIpRange};
        case SET_LEASE_TIME:
            return {...state, leaseTime: action.leaseTime};
        case SET_CLIENT_MAC_ADDRESS:
            return {...state, clientMacAddress: action.clientMacAddress};
        case SET_CLIENT_IP_ADDRESS:
            return {...state, clientIpAddress: action.clientIpAddress};
        default:
            return state;
    }
}

export default LocalDhcpServerReducer;