import {
    SET_DOMAIN_NAME,
    SET_BEGIN_IP_RANGE,
    SET_END_IP_RANGE,
    SET_LEASE_TIME,
    SUCCESS_SET_DOMAIN_NAME,
    SUCCESS_SET_BEGIN_IP_RANGE,
    SUCCESS_SET_END_IP_RANGE,
    SUCCESS_SET_LEASE_TIME
} from './constants';

export function setDomainName(domainName) {
    return {
        type: SET_DOMAIN_NAME,
        domainName
    }
}

export function setBeginIpRange(beginIpRange) {
    return {
        type: SET_BEGIN_IP_RANGE,
        beginIpRange
    }
}

export function setEndIpRange(endIpRange) {
    return {
        type: SET_END_IP_RANGE,
        endIpRange
    }
}

export function setLeaseTime(leaseTime) {
    return {
        type: SET_LEASE_TIME,
        leaseTime
    }
}

export function successSetDomainName(domainName) {
    return {
        type: SUCCESS_SET_DOMAIN_NAME,
        domainName
    }
}

export function successSetBeginIpRange(beginIpRange) {
    return {
        type: SUCCESS_SET_BEGIN_IP_RANGE,
        beginIpRange
    }
}

export function successSetEndIpRange(endIpRange) {
    return {
        type: SUCCESS_SET_END_IP_RANGE,
        endIpRange
    }
}

export function successSetLeaseTime(leaseTime) {
    return {
        type: SUCCESS_SET_LEASE_TIME,
        leaseTime
    }
}
