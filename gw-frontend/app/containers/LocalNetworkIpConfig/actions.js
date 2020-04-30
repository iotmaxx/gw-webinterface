import {
  SET_ADDRESS,
  GET_ADDRESS,
  SET_HOSTNAME,
  SET_MTU,
  SET_IPV6_ADDRESS,
  SUCCESS_SET_ADDRESS,
  SUCCESS_SET_HOSTNAME,
  SUCCESS_SET_MTU,
  SUCCESS_SET_IPV6_ADDRESS,
} from './constants';

export function setHostname(hostname) {
  return {
    type: SET_HOSTNAME,
    hostname,
  };
}

export function setAddress(ipAddress, subnetMask, oldAddress) {
  return {
    type: SET_ADDRESS,
    ipAddress,
    subnetMask,
    oldAddress,
  };
}

export function getAddress() {
  return {
    type: GET_ADDRESS,
  };
}

export function setMTU(mtu) {
  return {
    type: SET_MTU,
    mtu,
  };
}

export function setIpv6Address(ipv6Address) {
  return {
    type: SET_IPV6_ADDRESS,
    ipv6Address,
  };
}

export function successSetHostname(hostname) {
  return {
    type: SUCCESS_SET_HOSTNAME,
    hostname,
  };
}

export function successSetAddress(ipAddress, subnetMask) {
  return {
    type: SUCCESS_SET_ADDRESS,
    ipAddress,
    subnetMask,
  };
}

export function successGetAddress(ipAddress, subnetMask, mtu, hostname) {
  return {
    type: SUCCESS_SET_ADDRESS,
    ipAddress,
    subnetMask,
    mtu,
    hostname,
  };
}

export function successSetMTU(mtu) {
  return {
    type: SUCCESS_SET_MTU,
    mtu,
  };
}

export function successSetIpv6Address(ipv6Address) {
  return {
    type: SUCCESS_SET_IPV6_ADDRESS,
    ipv6Address,
  };
}
