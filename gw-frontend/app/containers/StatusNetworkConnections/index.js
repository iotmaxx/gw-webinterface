/**
 *
 * StatusNetworkConnections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

const WIFI_VALUES = [
  {
    caption: 'Link',
    value: 'TCP/IP connected',
  },
  {
    caption: 'IP Address',
    value: '209.168.145.154',
  },
  {
    caption: 'Netmask',
    value: '255.255.255.255',
  },
  {
    caption: 'DNS Server',
    value: '139.7.30.126',
  },
  {
    caption: 'Sec. DNS Server',
    value: '139.7.30.125',
  },
  {
    caption: 'RX Bytes',
    value: 'unknown',
  },
  {
    caption: 'TX Bytes',
    value: 'unknown',
  },
];

const LAN_VALUES = [
  {
    caption: 'Link #1',
    value: 'connected',
  },
  {
    caption: 'Link #2',
    value: 'connected',
  },
  {
    caption: 'IP Address',
    value: '192.168.0.1',
  },
  {
    caption: 'Netmask',
    value: '255.255.255.255',
  },
  {
    caption: 'IP Address',
    value: 'fe80::5054:ff:fea6:a808/64',
  },
  {
    caption: 'IP Address',
    value: '2a01:4f8:201:860f:5054:ff:fea6:a808/64',
  },
];

export function StatusNetworkConnections() {
  return (
    <div>
      <StatusOverview caption="Wireless Network" values={WIFI_VALUES} />
      <StatusOverview caption="Local Network" values={LAN_VALUES} />
    </div>
  );
}

StatusNetworkConnections.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(StatusNetworkConnections);
