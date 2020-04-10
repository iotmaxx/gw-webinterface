import {
  SET_ADDRESS,
  SET_HOSTNAME,
  SET_MTU,
  SUCCESS_SET_ADDRESS,
  SUCCESS_SET_HOSTNAME,
  SUCCESS_SET_MTU,
  FAILURE_SET_DATA,
} from './constants';
import { func } from 'prop-types';

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
    oldAddress
  };
}

export function setMTU(mtu) {
  return {
    type: SET_MTU,
    mtu,
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

export function successSetMTU(mtu) {
  return {
    type: SUCCESS_SET_MTU,
    mtu,
  };
}
