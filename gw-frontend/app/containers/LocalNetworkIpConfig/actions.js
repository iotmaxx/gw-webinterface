export const SET_HOSTNAME = 'SET_HOSTNAME';
export const SET_IP_ADDRESS = 'SET_IP_ADDRESS';
export const SET_MTU = 'SET_MTU';

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