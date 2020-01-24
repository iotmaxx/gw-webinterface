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
export const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const ROUTES = {
    dashboard: "/dashboard",
    login: "/login",
    status: {
        radio: "/status-radio",
        networkConnection: "/status-network-connection",
        ioStatus: "/status-io-status",
        comServer: "/status-com-server",
        routingTable: "/status-routing-table",
        dhcpLease: "/status-dhcp-leases",
        systemInfo: "/status-system-info"
    },
    localNetwork: {
        ipConfig: "/local-network-ip-config",
        dhcpServer: "/local-network-dhcp-server",
        staticRoutes: "/local-network-static-routes"
    },
    wifi: {
        radioSetup: "/wifi-radio-setup",
        sim: "/wifi-sim",
        backupSim: "/wifi-backup-sim",
        smsConfig: "/wifi-sms-config",
        packetDataSetup: "/wifi-packet-data-setup",
        staticRoutes: "/wifi-static-routes",
        dynDns: "/wifi-dyn-dns",
        connectionCheck: "/wifi-connection-check"
    },
    networkSecurity: {
        general: "/network-security-general",
        firewall: "/network-security-firewall",
        ipPortForwarding: "/network-security-ip-port-forwarding"
    },
    ipSec: {
        connection: "/ipsec-connections",
        certificates: "/ipsec-certificates",
        status: "/ipsec-status"
    },
    openVpn: {
        connections: "/openvpn-connections",
        portForwarding: "/openvpn-port-forwarding",
        certificates: "/openvpn-certificates",
        staticKeys: "/openvpn-static-keys",
        status: "/openvpn-status"
    },
    io: {
        inputs: "/io-inputs",
        outputs: "/io-outputs",
        phonebook: "/io-phonebook",
        socketServer: "/io-socket-server",
        comServer: "/io-com-server"
    },
    system: {
        hardware: "/system-hardware",
        software: "/system-software",
        systemConfiguration: "/system-system-configuration",
        user: "/system-user",
        logFiles: "/system-log-file",
        snmpConfig: "/system-snmp-config",
        smtpConfig: "/system-smtp-config",
        config: "/system-config",
        upDownload: "/system-up-download",
        rtc: "/system-rtc",
        reboot: "/system-reboot",
        firmwareUpdate: "/system-firmware-update"
    }
}

export const MAIN_COLORS = {
    dark: '#003a40',
    cyan: '#00bab3',
    orange: '#e16720',
    transparentlyDark: '#d6d6d673'
}