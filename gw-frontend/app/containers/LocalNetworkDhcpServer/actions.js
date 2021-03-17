import {
  SET_DOMAIN_NAME,
  SET_BEGIN_IP_RANGE,
  SET_END_IP_RANGE,
  SET_LEASE_TIME,
  SET_ENABLE_DHCP_SERVER,
  GET_DHCP_CONFIG,
  SUCCESS_SET_DOMAIN_NAME,
  SUCCESS_SET_BEGIN_IP_RANGE,
  SUCCESS_SET_END_IP_RANGE,
  SUCCESS_SET_LEASE_TIME,
  SUCCESS_ENABLE_DHCP_SERVER,
  SUCCESS_GET_DHCP_CONFIG,
} from './constants';

export function setDomainName(domainName) {
  return {
    type: SET_DOMAIN_NAME,
    domainName,
  };
}

export function setBeginIpRange(beginIpRange) {
  return {
    type: SET_BEGIN_IP_RANGE,
    beginIpRange,
  };
}

export function setEndIpRange(endIpRange) {
  return {
    type: SET_END_IP_RANGE,
    endIpRange,
  };
}

export function setLeaseTime(leaseTime) {
  return {
    type: SET_LEASE_TIME,
    leaseTime,
  };
}

export function setEnableDHCPServer(enableDHCPServer) {
  return {
    type: SET_ENABLE_DHCP_SERVER,
    enableDHCPServer,
  };
}

export function successSetEnableDHCPServer(enableDHCPServer) {
  return {
    type: SUCCESS_ENABLE_DHCP_SERVER,
    enableDHCPServer,
  };
}

export function successSetDomainName(domainName) {
  return {
    type: SUCCESS_SET_DOMAIN_NAME,
    domainName,
  };
}

export function successSetBeginIpRange(beginIpRange) {
  return {
    type: SUCCESS_SET_BEGIN_IP_RANGE,
    beginIpRange,
  };
}

export function successSetEndIpRange(endIpRange) {
  return {
    type: SUCCESS_SET_END_IP_RANGE,
    endIpRange,
  };
}

export function successSetLeaseTime(leaseTime) {
  return {
    type: SUCCESS_SET_LEASE_TIME,
    leaseTime,
  };
}

export function getDhcpConfig() {
  return {
    type: GET_DHCP_CONFIG,
  };
}

export function successGetDhcpConfig(
  domainName,
  beginIpRange,
  endIpRange,
  leaseTime,
  enableDHCPServer,
) {
  return {
    type: SUCCESS_GET_DHCP_CONFIG,
    domainName,
    beginIpRange,
    endIpRange,
    leaseTime,
    enableDHCPServer,
  };
}
