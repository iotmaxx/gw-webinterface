/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from 'components/AuthRoute';

import LoginView from 'containers/LoginView/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';

import IoComServer from 'containers/IoComServer/Loadable';
import IoInputs from 'containers/IoInputs/Loadable';
import IoOutputs from 'containers/IoOutputs/Loadable';
import IoPhonebook from 'containers/IoPhonebook/Loadable';
import IoSocketServer from 'containers/IoSocketServer/Loadable';
import LocalNetworkDhcpServer from 'containers/LocalNetworkDhcpServer/Loadable';
import LocalNetworkIpConfig from 'containers/LocalNetworkIpConfig/Loadable';
import LocalNetworkStaticRoutes from 'containers/LocalNetworkStaticRoutes/Loadable';
import NetworkSecurityFirewall from 'containers/NetworkSecurityFirewall/Loadable';
import NetworkSecurityGeneralSetup from 'containers/NetworkSecurityGeneralSetup/Loadable';
import NetworkSecurityIpAndPortForwarding from 'containers/NetworkSecurityIpAndPortForwarding/Loadable';
import StatusComServer from 'containers/StatusComServer/Loadable';
import StatusDhcpLeases from 'containers/StatusDhcpLeases/Loadable';
import StatusIoStats from 'containers/StatusIoStats/Loadable';
import StatusNetworkConnections from 'containers/StatusNetworkConnections/Loadable';
import StatusRadio from 'containers/StatusRadio/Loadable';
import StatusRoutingTable from 'containers/StatusRoutingTable/Loadable';
import StatusSystemInfo from 'containers/StatusSystemInfo/Loadable';
import SystemConfiguration from 'containers/SystemConfiguration/Loadable';
import SystemHardware from 'containers/SystemHardware/Loadable';
import SystemLogFile from 'containers/SystemLogFile/Loadable';
import SystemReboot from 'containers/SystemReboot/Loadable';
import SystemRtc from 'containers/SystemRtc/Loadable';
import SystemSmtpConfiguration from 'containers/SystemSmtpConfiguration/Loadable';
import SystemSnmpConfiguration from 'containers/SystemSnmpConfiguration/Loadable';
import SystemSoftware from 'containers/SystemSoftware/Loadable';
import SystemSystemConfiguration from 'containers/SystemSystemConfiguration/Loadable';
import SystemUpAndDownload from 'containers/SystemUpAndDownload/Loadable';
import SystemUser from 'containers/SystemUser/Loadable';
import SystemFirmwareUpdate from 'containers/SystemFirmwareUpdate/Loadable';
import VpnIPsecCertificates from 'containers/VpnIPsecCertificates/Loadable';
import VpnIPsecConnections from 'containers/VpnIPsecConnections/Loadable';
import VpnIPsecStatus from 'containers/VpnIPsecStatus/Loadable';
import VpnOpenVpnCertificates from 'containers/VpnOpenVpnCertificates/Loadable';
import VpnOpenVpnConnections from 'containers/VpnOpenVpnConnections/Loadable';
import VpnOpenVpnPortForwarding from 'containers/VpnOpenVpnPortForwarding/Loadable';
import VpnOpenVpnStaticKeys from 'containers/VpnOpenVpnStaticKeys/Loadable';
import VpnOpenVpnStatus from 'containers/VpnOpenVpnStatus/Loadable';
import WirelessNetworkBackupSim from 'containers/WirelessNetworkBackupSim/Loadable';
import WirelessNetworkConnectionCheck from 'containers/WirelessNetworkConnectionCheck/Loadable';
import WirelessNetworkDynDns from 'containers/WirelessNetworkDynDns/Loadable';  
import WirelessNetworkPacketDataSetup from 'containers/WirelessNetworkPacketDataSetup/Loadable';
import WirelessNetworkRadioSetup from 'containers/WirelessNetworkRadioSetup/Loadable';
import WirelessNetworkSim from 'containers/WirelessNetworkSim/Loadable';
import WirelessNetworkSmsConfig from 'containers/WirelessNetworkSmsConfig/Loadable';
import WirelessNetworkStaticRoutes from 'containers/WirelessNetworkStaticRoutes/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { ACCESS_TOKEN, ROUTES } from './constants';

import SideNav from 'components/SideNav/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 10vh);
  justify-content: flex-start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function App() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  return (
    <MainWrapper>
      <Header/>
      <BodyWrapper>
      <SideNav/>
      <ContentWrapper>
          <Switch>
            <Route exact path="/">
              {accessToken && <Redirect to={ROUTES.dashboard} />}
              {!accessToken && <Redirect to={ROUTES.login} />}
            </Route>
            <Route exact path={ROUTES.login} component={!accessToken ? LoginView : Dashboard} />
            
            <AuthRoute exact path={ROUTES.dashboard} component={Dashboard} />
            
            <AuthRoute exact path={ROUTES.status.radio} component={StatusRadio} />
            <AuthRoute exact path={ROUTES.status.networkConnection} component={StatusNetworkConnections} />
            <AuthRoute exact path={ROUTES.status.ioStatus} component={StatusIoStats} />
            <AuthRoute exact path={ROUTES.status.comServer} component={StatusComServer} />
            <AuthRoute exact path={ROUTES.status.routingTable} component={StatusRoutingTable} />
            <AuthRoute exact path={ROUTES.status.dhcpLease} component={StatusDhcpLeases} />
            <AuthRoute exact path={ROUTES.status.systemInfo} component={StatusSystemInfo} />

            <AuthRoute exact path={ROUTES.localNetwork.ipConfig} component={LocalNetworkIpConfig} />
            <AuthRoute exact path={ROUTES.localNetwork.dhcpServer} component={LocalNetworkDhcpServer} />
            <AuthRoute exact path={ROUTES.localNetwork.staticRoutes} component={LocalNetworkStaticRoutes} />

            <AuthRoute exact path={ROUTES.wifi.radioSetup} component={WirelessNetworkRadioSetup} />
            <AuthRoute exact path={ROUTES.wifi.sim} component={WirelessNetworkSim} />
            <AuthRoute exact path={ROUTES.wifi.backupSim} component={WirelessNetworkBackupSim} />
            <AuthRoute exact path={ROUTES.wifi.smsConfig} component={WirelessNetworkSmsConfig} />
            <AuthRoute exact path={ROUTES.wifi.packetDataSetup} component={WirelessNetworkPacketDataSetup} />
            <AuthRoute exact path={ROUTES.wifi.staticRoutes} component={WirelessNetworkStaticRoutes} />
            <AuthRoute exact path={ROUTES.wifi.dynDns} component={WirelessNetworkDynDns} />
            <AuthRoute exact path={ROUTES.wifi.connectionCheck} component={WirelessNetworkConnectionCheck} />

            <AuthRoute exact path={ROUTES.networkSecurity.general} component={NetworkSecurityGeneralSetup} />
            <AuthRoute exact path={ROUTES.networkSecurity.firewall} component={NetworkSecurityFirewall} />
            <AuthRoute exact path={ROUTES.networkSecurity.ipPortForwarding} component={NetworkSecurityIpAndPortForwarding} />

            <AuthRoute exact path={ROUTES.ipSec.connection} component={VpnIPsecConnections} />
            <AuthRoute exact path={ROUTES.ipSec.certificates} component={VpnIPsecCertificates} />
            <AuthRoute exact path={ROUTES.ipSec.status} component={VpnIPsecStatus} />

            <AuthRoute exact path={ROUTES.openVpn.connections} component={VpnOpenVpnConnections} />
            <AuthRoute exact path={ROUTES.openVpn.portForwarding} component={VpnOpenVpnPortForwarding} />
            <AuthRoute exact path={ROUTES.openVpn.certificates} component={VpnOpenVpnCertificates} />
            <AuthRoute exact path={ROUTES.openVpn.staticKeys} component={VpnOpenVpnStaticKeys} />
            <AuthRoute exact path={ROUTES.openVpn.status} component={VpnOpenVpnStatus} />

            <AuthRoute exact path={ROUTES.io.inputs} component={IoInputs} />
            <AuthRoute exact path={ROUTES.io.outputs} component={IoOutputs} />
            <AuthRoute exact path={ROUTES.io.phonebook} component={IoPhonebook} />
            <AuthRoute exact path={ROUTES.io.socketServer} component={IoSocketServer} />
            <AuthRoute exact path={ROUTES.io.comServer} component={IoComServer} />

            <AuthRoute exact path={ROUTES.system.hardware} component={SystemHardware} />
            <AuthRoute exact path={ROUTES.system.software} component={SystemSoftware} />
            <AuthRoute exact path={ROUTES.system.systemConfiguration} component={SystemSystemConfiguration} />
            <AuthRoute exact path={ROUTES.system.user} component={SystemUser} />
            <AuthRoute exact path={ROUTES.system.logFiles} component={SystemLogFile} />
            <AuthRoute exact path={ROUTES.system.snmpConfig} component={SystemSnmpConfiguration} />
            <AuthRoute exact path={ROUTES.system.smtpConfig} component={SystemSmtpConfiguration} />
            <AuthRoute exact path={ROUTES.system.config} component={SystemConfiguration} />
            <AuthRoute exact path={ROUTES.system.upDownload} component={SystemUpAndDownload} />
            <AuthRoute exact path={ROUTES.system.rtc} component={SystemRtc} />
            <AuthRoute exact path={ROUTES.system.reboot} component={SystemReboot} />
            <AuthRoute exact path={ROUTES.system.firmwareUpdate} component={SystemFirmwareUpdate} />

            <Route component={NotFoundPage} />
          </Switch>
        </ContentWrapper>
      </BodyWrapper>
      <GlobalStyle />
    </MainWrapper>
  );
}
