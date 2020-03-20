import {
    SET_IP_ADDRESS,
    SET_HOSTNAME,
    SET_MTU,
    SET_SUBNETMASK,
    SUCCESS_SET_IP_ADDRESS,
    SUCCESS_SET_HOSTNAME,
    SUCCESS_SET_MTU,
    SUCCESS_SET_SUBNETMASK
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

export function successSetHostname(hostname) {
    return {
        type: SUCCESS_SET_HOSTNAME,
        hostname
    }
}

export function successSetIpAddress(ipAddress, subnetMask) {
    return {
        type: SUCCESS_SET_IP_ADDRESS,
        ipAddress,
        subnetMask
    }
}

export function successSetMTU(mtu) {
    return {
        type: SUCCESS_SET_MTU,
        mtu
    }
}

export function successSetSubnetmask(subnetMask) {
    return {
        type: SUCCESS_SET_SUBNETMASK,
        subnetMask
    }
}