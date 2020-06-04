/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
import * as Yup from 'yup';
import styled from 'styled-components';

export const ROUTES = {
  dashboard: '/dashboard',
  login: '/login',
  status: {
    radio: '/status-radio',
    networkConnection: '/status-network-connection',
    ioStatus: '/status-io-status',
    comServer: '/status-com-server',
    routingTable: '/status-routing-table',
    dhcpLease: '/status-dhcp-leases',
    systemInfo: '/status-system-info',
  },
  localNetwork: {
    ipConfig: '/local-network-ip-config',
    dhcpServer: '/local-network-dhcp-server',
    staticRoutes: '/local-network-static-routes',
  },
  wifi: {
    radioSetup: '/wifi-radio-setup',
    sim: '/wifi-sim',
    backupSim: '/wifi-backup-sim',
    smsConfig: '/wifi-sms-config',
    packetDataSetup: '/wifi-packet-data-setup',
    staticRoutes: '/wifi-static-routes',
    dynDns: '/wifi-dyn-dns',
    connectionCheck: '/wifi-connection-check',
  },
  networkSecurity: {
    general: '/network-security-general',
    firewall: '/network-security-firewall',
    ipPortForwarding: '/network-security-ip-port-forwarding',
  },
  ipSec: {
    connection: '/ipsec-connections',
    certificates: '/ipsec-certificates',
    status: '/ipsec-status',
  },
  openVpn: {
    connections: '/openvpn-connections',
    portForwarding: '/openvpn-port-forwarding',
    certificates: '/openvpn-certificates',
    staticKeys: '/openvpn-static-keys',
    status: '/openvpn-status',
  },
  io: {
    inputs: '/io-inputs',
    outputs: '/io-outputs',
    phonebook: '/io-phonebook',
    socketServer: '/io-socket-server',
    comServer: '/io-com-server',
  },
  system: {
    hardware: '/system-hardware',
    software: '/system-software',
    systemConfiguration: '/system-system-configuration',
    user: '/system-user',
    logFiles: '/system-log-file',
    snmpConfig: '/system-snmp-config',
    smtpConfig: '/system-smtp-config',
    config: '/system-config',
    upDownload: '/system-up-download',
    rtc: '/system-rtc',
    reboot: '/system-reboot',
    firmwareUpdate: '/system-firmware-update',
  },
};

export const MAIN_COLORS = {
  dark: '#003a40',
  cyan: '#00bab3',
  headerBorderColor: 'rgb(0, 186, 179)',
  contentHeaderBackground: '#f2f5f5',
  orange: '#e16720',
  transparentlyDark: '#d6d6d636',
  customWebkitScrollbar: '#c3c4c4',
  darkTableRow: '#ddd',
  lightTableRow: '#eee',
  tableCaptionGreen: 'rgb(0, 58, 64)',
};

export const LightTableRow = styled.tr`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: white;
  background-color: ${MAIN_COLORS.lightTableRow};
`;

export const DarkTableRow = styled.tr`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: white;
  background-color: ${MAIN_COLORS.darkTableRow};
`;

export const InputCell = styled.td`
  text-align: left;
  padding-left: 1em;
  width: 50%;
`;

export const LabelCell = styled.td`
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: white;
  width: 50%;
`;

export const Select = styled.select`
  width: inherit;
`;

export const CenterButton = styled.button`
  align-self: center;
  padding-left: 1em;
  padding-right: 1em;
  color: white;
  font-weight: bold;
`;

export const FormWrapper = styled.form`
  display: flex;
  min-width: max-content;
  flex-direction: column;
  padding: 0px 0px 1em 0px;
  margin-left: 1em;
`;

export const TableHead = styled.td`
  text-align: center;
  font-weight: bold;
`;

export const TableTitle = styled.p`
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  text-align: center;
  background-color: ${MAIN_COLORS.tableCaptionGreen};
  margin: 0;
  color: white;
  font-weight: bold;
  padding: 1em 0 1em 0;
`;

export const Table = styled.table`
  margin-left: 1em;
  margin-top: 2em;
`;

export const TD = styled.td`
  padding: 0.5em 1em 0.5em 1em;
  border-left-color: white;
  border-left-style: solid;
  border-left-width: 2px;
`;

export const TR = styled.tr`
  :nth-child(odd) {
    background-color: ${MAIN_COLORS.darkTableRow};
  }
  :nth-child(even) {
    background-color: ${MAIN_COLORS.lightTableRow};
  }
  border-bottom-color: white;
  border-bottom-style: solid;
  border-bottom-width: 2px;
`;

export const YUP_VALIDATORS = {
  ipV4Field: Yup.string().matches(
    /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    'Not a valid IPv4 address',
  ),
  positiveNumber: Yup.number()
    .typeError('Only numeric values allowed')
    .positive('Please enter a number bigger 0'),
};

export const ACCESS_TOKEN = 'USER_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_ERROR = 'SET_ERROR';
export const DISMISS = 'DISMISS';

export const port = process.env.HOST_PORT ? process.env.HOST_PORT : 3000;
const host = process.env.HOST_ADDRESS ? process.env.HOST_ADDRESS : '127.0.0.1';
export const API_URL = `http://${host}:${port}/api/v1/`;
