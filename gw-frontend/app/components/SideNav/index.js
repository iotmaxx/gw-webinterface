/**
 *
 * SideNav
 *
 */

import React from 'react';
import styled from 'styled-components';

import { withRouter } from "react-router-dom";

import MenuDropDownGroup from 'components/MenuDropdownGroup';
import MenuDropDownItem from 'components/MenuDropdownItem';
import MenuDropdownGroup from 'components/MenuDropdownGroup';

import { ACCESS_TOKEN, ROUTES } from 'containers/App/constants';

const Wrapper = styled.div`
  position: fixed;
  left: 0px;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  width: 10%;
  background-color: #3ab49b;
  overflow-y: scroll;
`;

function SideNav(props) {

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    props.history.push(ROUTES.login);
  }

  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  return (
    <div>
      {accessToken ? (
        <Wrapper>
          <p onClick={logout}>Logout</p>
          <MenuDropDownGroup caption="Status">
            <MenuDropDownItem to={ROUTES.status.radio} caption="Radio"/>
            <MenuDropDownItem to={ROUTES.status.networkConnection} caption="Network Connection"/>
            <MenuDropDownItem to={ROUTES.status.ioStatus} caption="I/O Status"/>
            <MenuDropDownItem to={ROUTES.status.comServer} caption="ComSERVER"/>
            <MenuDropDownItem to={ROUTES.status.routingTable} caption="Routing Table"/>
            <MenuDropDownItem to={ROUTES.status.dhcpLease} caption="DHCP Leases"/>
            <MenuDropDownItem to={ROUTES.status.systemInfo} caption="System Info"/>
          </MenuDropDownGroup>
          <MenuDropDownGroup caption="Local Network">
            <MenuDropDownItem to={ROUTES.localNetwork.ipConfig} caption="IP Configuration"/>
            <MenuDropDownItem to={ROUTES.localNetwork.dhcpServer} caption="DHCP Server"/>
            <MenuDropDownItem to={ROUTES.localNetwork.staticRoutes} caption="Static Routes"/>
          </MenuDropDownGroup>
          <MenuDropDownGroup caption="Wireless Network">
            <MenuDropDownItem to={ROUTES.wifi.radioSetup} caption="Radio Setup"/>
            <MenuDropDownItem to={ROUTES.wifi.sim} caption="SIM"/>
            <MenuDropDownItem to={ROUTES.wifi.backupSim} caption="Backup SIM"/>
            <MenuDropDownItem to={ROUTES.wifi.smsConfig} caption="SMS Configuration"/>
            <MenuDropDownItem to={ROUTES.wifi.packetDataSetup} caption="Packet Data Setup"/>
            <MenuDropDownItem to={ROUTES.wifi.staticRoutes} caption="Static Routes"/>
            <MenuDropDownItem to={ROUTES.wifi.dynDns} caption="DynDNS"/>
            <MenuDropDownItem to={ROUTES.wifi.connectionCheck} caption="Connection Check"/>
          </MenuDropDownGroup>
          <MenuDropDownGroup caption="Network Security">
            <MenuDropDownItem to={ROUTES.networkSecurity.general} caption="General Setup"/>
            <MenuDropDownItem to={ROUTES.networkSecurity.firewall} caption="Firewall"/>
            <MenuDropDownItem to={ROUTES.networkSecurity.ipPortForwarding} caption="IP and Port Forwarding"/>
          </MenuDropDownGroup>
          <MenuDropDownGroup caption="VPN">
            <MenuDropdownGroup caption="IPSec">
              <MenuDropDownItem to={ROUTES.ipSec.connection} caption="Connections"/>
              <MenuDropDownItem to={ROUTES.ipSec.certificates} caption="Certificates"/>
              <MenuDropDownItem to={ROUTES.ipSec.status} caption="Status"/>
            </MenuDropdownGroup>
            <MenuDropdownGroup caption="OpenVPN">
              <MenuDropDownItem to={ROUTES.openVpn.connections} caption="Connections"/>
              <MenuDropDownItem to={ROUTES.openVpn.portForwarding} caption="Port Forwarding"/>
              <MenuDropDownItem to={ROUTES.openVpn.certificates} caption="Certificates"/>
              <MenuDropDownItem to={ROUTES.openVpn.staticKeys} caption="Static Keys"/>
              <MenuDropDownItem to={ROUTES.openVpn.status} caption="Status"/>
            </MenuDropdownGroup>
          </MenuDropDownGroup>
          <MenuDropDownGroup caption="I/O">
            <MenuDropDownItem to={ROUTES.io.inputs} caption="Inputs"/>
            <MenuDropDownItem to={ROUTES.io.outputs} caption="Outputs"/>
            <MenuDropDownItem to={ROUTES.io.phonebook} caption="Phonebook"/>
            <MenuDropDownItem to={ROUTES.io.socketServer} caption="Socket Server"/>
            <MenuDropDownItem to={ROUTES.io.comServer} caption="ComSERVER"/>
          </MenuDropDownGroup>
          <MenuDropDownGroup caption="System">
            <MenuDropDownItem to={ROUTES.system.hardware} caption="Hardware"/>
            <MenuDropDownItem to={ROUTES.system.software} caption="Software"/>
            <MenuDropDownItem to={ROUTES.system.systemConfiguration} caption="System Configuration"/>
            <MenuDropDownItem to={ROUTES.system.user} caption="User"/>
            <MenuDropDownItem to={ROUTES.system.logFiles} caption="Log-File"/>
            <MenuDropDownItem to={ROUTES.system.snmpConfig} caption="SNMP Configuration"/>
            <MenuDropDownItem to={ROUTES.system.smtpConfig} caption="SMTP Configuration"/>
            <MenuDropDownItem to={ROUTES.system.config} caption="Configuration"/>
            <MenuDropDownItem to={ROUTES.system.upDownload} caption="Up-/Download"/>
            <MenuDropDownItem to={ROUTES.system.rtc} caption="RTC"/>
            <MenuDropDownItem to={ROUTES.system.reboot} caption="Reboot"/>
            <MenuDropDownItem to={ROUTES.system.firmwareUpdate} caption="Firmware Update"/>
          </MenuDropDownGroup>
        </Wrapper>
      ) : null}
    </div>
  );
}

SideNav.propTypes = {};

export default withRouter(SideNav);
