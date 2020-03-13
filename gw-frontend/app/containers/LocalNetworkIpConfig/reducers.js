import {
    SET_IP_ADDRESS,
    SET_HOSTNAME,
    SET_MTU,
    SET_SUBNETMASK
} from './constants';
  
  const initialState = {
    mtu: 1500,
    hostname: 'localhost',
    ipAddress: '127.0.0.1',
    subnetMask: '255.255.255.0'
};

function LocalNetworkReducer(state = initialState, action) {
    switch(action.type) {
        case SET_MTU:
            return {...state, mtu: action.mtu};
        case SET_IP_ADDRESS:
            return {...state, ipAddress: action.ipAddress};
            case SET_HOSTNAME:
                return {...state, hostname: action.hostname};
            case SET_SUBNETMASK:
                return {...state, subnetMask: action.subnetMask};
        default:
            return state;
    }
}

export default LocalNetworkReducer;