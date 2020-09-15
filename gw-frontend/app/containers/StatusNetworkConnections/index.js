/**
 *
 * StatusNetworkConnections
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

import { getNetworkInfo } from './actions';

const WIFI_VALUES = [
  {
    caption: 'Link',
    value: 'N/A',
  },
  {
    caption: 'IP Address',
    value: 'N/A',
  },
  {
    caption: 'Netmask',
    value: 'N/A',
  },
  {
    caption: 'DNS Server',
    value: 'N/A',
  },
  {
    caption: 'Sec. DNS Server',
    value: 'N/A',
  },
  {
    caption: 'RX Bytes',
    value: 'N/A',
  },
  {
    caption: 'TX Bytes',
    value: 'N/A',
  },
];

// TODO: Adjust table title to meet menu point
export function StatusNetworkConnections({
  doGetNetworkInfo,
  ipAddress,
  subnetMask,
  ipv6Address,
}) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    doGetNetworkInfo();
  }, []);

  useEffect(() => {
    const lanValues = [
      {
        caption: 'Link #1',
        value: 'connected',
      },
      {
        caption: 'IP Address',
        value: ipAddress,
      },
      {
        caption: 'Netmask',
        value: subnetMask,
      },
      {
        caption: 'IPv6 Address',
        value: ipv6Address,
      },
    ];
    setValues(lanValues);
  }, [ipAddress, subnetMask, ipv6Address]);

  const networkData = {
    wifi: {
      caption: 'Wireless Network',
      values: WIFI_VALUES,
    },
    lan: {
      caption: 'Local Network',
      values,
    },
  };
  return (
    <div>
      <StatusOverview
        caption="Network Connection"
        asList={false}
        values={networkData}
      />
    </div>
  );
}

StatusNetworkConnections.propTypes = {
  doGetNetworkInfo: PropTypes.func,
  ipAddress: PropTypes.string,
  subnetMask: PropTypes.string,
  ipv6Address: PropTypes.string,
};

const mapStateToProps = state => ({
  ipAddress: state.StatusNetworkConnections.ipAddress,
  subnetMask: state.StatusNetworkConnections.subnetMask,
  ipv6Address: state.StatusNetworkConnections.ipv6Address,
});

function mapDispatchToProps(dispatch) {
  return {
    doGetNetworkInfo: () => {
      dispatch(getNetworkInfo());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StatusNetworkConnections);
