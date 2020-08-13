/**
 *
 * SideNav
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-duplicates
import MenuDropDownGroup from 'components/MenuDropdownGroup';
// eslint-disable-next-line import/no-duplicates
import MenuDropdownGroup from 'components/MenuDropdownGroup';

import MenuDropDownItem from 'components/MenuDropdownItem';

import { ROUTES, MAIN_COLORS } from 'containers/App/constants';

import Logout from '../../assets/icons/Logout.svg';

const Wrapper = styled.div`
  left: 0px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 20em;
  min-width: 18em;
  height: 100%;
  background-color: ${MAIN_COLORS.dark};
  overflow-y: scroll;
  top: 10vh;
`;

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledP = styled.p`
  color: white;
`;

const StyledLogout = styled.img`
  height: 1.4rem;
  margin-right: 0.5rem;
`;

export class SideNav extends React.Component {
  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.loggedIn !== nextProps.loggedIn) return true;
    return false;
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <Wrapper>
            <LogoutContainer onClick={this.props.logout}>
              <StyledLogout src={Logout} />
              <StyledP>Logout</StyledP>
            </LogoutContainer>
            <MenuDropDownGroup caption="Status">
              <MenuDropDownItem to={ROUTES.status.radio} caption="Radio" />
              <MenuDropDownItem
                to={ROUTES.status.networkConnection}
                caption="Network Connection"
              />
              <MenuDropDownItem
                to={ROUTES.status.ioStatus}
                caption="I/O Status"
              />
              <MenuDropDownItem
                to={ROUTES.status.comServer}
                caption="ComSERVER"
              />
              <MenuDropDownItem
                to={ROUTES.status.routingTable}
                caption="Routing Table"
              />
              <MenuDropDownItem
                to={ROUTES.status.dhcpLease}
                caption="DHCP Leases"
              />
              <MenuDropDownItem
                to={ROUTES.status.systemInfo}
                caption="System Info"
              />
            </MenuDropDownGroup>
            <MenuDropDownGroup caption="Local Network">
              <MenuDropDownItem
                to={ROUTES.localNetwork.ipConfig}
                caption="IP Configuration"
              />
              <MenuDropDownItem
                to={ROUTES.localNetwork.dhcpServer}
                caption="DHCP Server"
              />
              {/*
              <MenuDropDownItem
                to={ROUTES.localNetwork.staticRoutes}
                caption="Static Routes"
              />
              */}
            </MenuDropDownGroup>
            <MenuDropDownGroup caption="Wireless Network">
              {/*
              <MenuDropDownItem
                to={ROUTES.wifi.radioSetup}
                caption="Radio Setup"
              />
              */}
              <MenuDropDownItem to={ROUTES.wifi.sim} caption="SIM" />
              <MenuDropDownItem
                to={ROUTES.wifi.backupSim}
                caption="Backup SIM"
              />
              {/*
              <MenuDropDownItem
                to={ROUTES.wifi.smsConfig}
                caption="SMS Configuration"
              />
              <MenuDropDownItem
                to={ROUTES.wifi.packetDataSetup}
                caption="Packet Data Setup"
              />
              <MenuDropDownItem
                to={ROUTES.wifi.staticRoutes}
                caption="Static Routes"
              />
              <MenuDropDownItem to={ROUTES.wifi.dynDns} caption="DynDNS" />
              <MenuDropDownItem
                to={ROUTES.wifi.connectionCheck}
                caption="Connection Check"
              />
              */}
            </MenuDropDownGroup>
            {/*
            <MenuDropDownGroup caption="Network Security">
              <MenuDropDownItem
                to={ROUTES.networkSecurity.general}
                caption="General Setup"
              />
              <MenuDropDownItem
                to={ROUTES.networkSecurity.firewall}
                caption="Firewall"
              />
              <MenuDropDownItem
                to={ROUTES.networkSecurity.ipPortForwarding}
                caption="IP and Port Forwarding"
              />
            </MenuDropDownGroup>
            */}
            {/*
            <MenuDropDownGroup caption="VPN">
              <MenuDropdownGroup caption="IPSec" subcategory>
                <MenuDropDownItem
                  to={ROUTES.ipSec.connection}
                  caption="Connections"
                  depth={1}
                />
                <MenuDropDownItem
                  to={ROUTES.ipSec.certificates}
                  caption="Certificates"
                  depth={1}
                />
                <MenuDropDownItem
                  to={ROUTES.ipSec.status}
                  caption="Status"
                  depth={1}
                />
              </MenuDropdownGroup>
              <MenuDropdownGroup caption="OpenVPN" subcategory>
                <MenuDropDownItem
                  to={ROUTES.openVpn.connections}
                  caption="Connections"
                  depth={1}
                />
                <MenuDropDownItem
                  to={ROUTES.openVpn.portForwarding}
                  caption="Port Forwarding"
                  depth={1}
                />
                <MenuDropDownItem
                  to={ROUTES.openVpn.certificates}
                  caption="Certificates"
                  depth={1}
                />
                <MenuDropDownItem
                  to={ROUTES.openVpn.staticKeys}
                  caption="Static Keys"
                  depth={1}
                />
                <MenuDropDownItem
                  to={ROUTES.openVpn.status}
                  caption="Status"
                  depth={1}
                />
              </MenuDropdownGroup>
            </MenuDropDownGroup>
            */}
            {/*
            <MenuDropDownGroup caption="I/O">
              <MenuDropDownItem to={ROUTES.io.inputs} caption="Inputs" />
              <MenuDropDownItem to={ROUTES.io.outputs} caption="Outputs" />
              <MenuDropDownItem to={ROUTES.io.phonebook} caption="Phonebook" />
              <MenuDropDownItem
                to={ROUTES.io.socketServer}
                caption="Socket Server"
              />
              <MenuDropDownItem to={ROUTES.io.comServer} caption="ComSERVER" />
            </MenuDropDownGroup>
            */}
            {/*
            <MenuDropDownGroup caption="System">
              <MenuDropDownItem
                to={ROUTES.system.hardware}
                caption="Hardware"
              />
              <MenuDropDownItem
                to={ROUTES.system.software}
                caption="Software"
              />
              <MenuDropDownItem
                to={ROUTES.system.systemConfiguration}
                caption="System Configuration"
              />
              <MenuDropDownItem to={ROUTES.system.user} caption="User" />
              <MenuDropDownItem
                to={ROUTES.system.logFiles}
                caption="Log-File"
              />
              <MenuDropDownItem
                to={ROUTES.system.snmpConfig}
                caption="SNMP Configuration"
              />
              <MenuDropDownItem
                to={ROUTES.system.smtpConfig}
                caption="SMTP Configuration"
              />
              <MenuDropDownItem
                to={ROUTES.system.config}
                caption="Configuration"
              />
              <MenuDropDownItem
                to={ROUTES.system.upDownload}
                caption="Up-/Download"
              />
              <MenuDropDownItem to={ROUTES.system.rtc} caption="RTC" />
              <MenuDropDownItem to={ROUTES.system.reboot} caption="Reboot" />
              <MenuDropDownItem
                to={ROUTES.system.firmwareUpdate}
                caption="Firmware Update"
              />
            </MenuDropDownGroup>
            */}
          </Wrapper>
        ) : null}
      </div>
    );
  }
}

SideNav.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

export default withRouter(SideNav);
