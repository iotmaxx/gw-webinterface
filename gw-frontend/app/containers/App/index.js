/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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

import { ROUTES } from './constants';

import SideNav from 'components/SideNav/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import LoginReducer from './reducers';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { logout } from './actions';

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

export function App({ loggedIn, doLogout }) {

  return (
    <MainWrapper>
      <Header/>
      <BodyWrapper>
      <SideNav loggedIn={loggedIn} logout={doLogout}/>
      <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <Redirect to={ROUTES.login} />
            </Route>
            <Route exact path={ROUTES.login} component={!loggedIn ? LoginView : Dashboard} />
            
            <AuthRoute exact path={ROUTES.dashboard} component={Dashboard} loggedIn={loggedIn} />
            
            <AuthRoute exact path={ROUTES.status.radio} component={StatusRadio} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.status.networkConnection} component={StatusNetworkConnections} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.status.ioStatus} component={StatusIoStats} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.status.comServer} component={StatusComServer} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.status.routingTable} component={StatusRoutingTable} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.status.dhcpLease} component={StatusDhcpLeases} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.status.systemInfo} component={StatusSystemInfo} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.localNetwork.ipConfig} component={LocalNetworkIpConfig} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.localNetwork.dhcpServer} component={LocalNetworkDhcpServer} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.localNetwork.staticRoutes} component={LocalNetworkStaticRoutes} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.wifi.radioSetup} component={WirelessNetworkRadioSetup} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.sim} component={WirelessNetworkSim} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.backupSim} component={WirelessNetworkBackupSim} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.smsConfig} component={WirelessNetworkSmsConfig} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.packetDataSetup} component={WirelessNetworkPacketDataSetup} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.staticRoutes} component={WirelessNetworkStaticRoutes} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.dynDns} component={WirelessNetworkDynDns} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.wifi.connectionCheck} component={WirelessNetworkConnectionCheck} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.networkSecurity.general} component={NetworkSecurityGeneralSetup} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.networkSecurity.firewall} component={NetworkSecurityFirewall} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.networkSecurity.ipPortForwarding} component={NetworkSecurityIpAndPortForwarding} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.ipSec.connection} component={VpnIPsecConnections} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.ipSec.certificates} component={VpnIPsecCertificates} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.ipSec.status} component={VpnIPsecStatus} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.openVpn.connections} component={VpnOpenVpnConnections} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.openVpn.portForwarding} component={VpnOpenVpnPortForwarding} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.openVpn.certificates} component={VpnOpenVpnCertificates} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.openVpn.staticKeys} component={VpnOpenVpnStaticKeys} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.openVpn.status} component={VpnOpenVpnStatus} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.io.inputs} component={IoInputs} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.io.outputs} component={IoOutputs} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.io.phonebook} component={IoPhonebook} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.io.socketServer} component={IoSocketServer} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.io.comServer} component={IoComServer} loggedIn={loggedIn} />

            <AuthRoute exact path={ROUTES.system.hardware} component={SystemHardware} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.software} component={SystemSoftware} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.systemConfiguration} component={SystemSystemConfiguration} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.user} component={SystemUser} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.logFiles} component={SystemLogFile} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.snmpConfig} component={SystemSnmpConfiguration} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.smtpConfig} component={SystemSmtpConfiguration} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.config} component={SystemConfiguration} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.upDownload} component={SystemUpAndDownload} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.rtc} component={SystemRtc} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.reboot} component={SystemReboot} loggedIn={loggedIn} />
            <AuthRoute exact path={ROUTES.system.firmwareUpdate} component={SystemFirmwareUpdate} loggedIn={loggedIn} />

            <Route component={NotFoundPage} />
          </Switch>
        </ContentWrapper>
      </BodyWrapper>
      <GlobalStyle />
    </MainWrapper>
  );
}

App.propTypes = {
  doLogout: PropTypes.func,
  loggedIn: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    doLogout: () => {
      dispatch(logout())
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.App.loggedIn
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'App', reducer: LoginReducer });

export default compose(withReducer, withConnect)(App)