import {
    SET_IP_ADDRESS,
    SET_HOSTNAME,
    SET_MTU,
    SET_SUBNETMASK
} from './constants';

export function setHostname(hostname) {
    return {
        type: SET_HOSTNAME,
        hostname
    }
}

export function setIpAddress(ipAddress, subnetMask) {
    return {
        type: SET_IP_ADDRESS,
        ipAddress,
        subnetMask
    }
}

export function setMTU(mtu) {
    return {
        type: SET_MTU,
        mtu
    }
}

export function setSubnetmask(subnetMask) {
    return {
        type: SET_SUBNETMASK,
        subnetMask
    }
}