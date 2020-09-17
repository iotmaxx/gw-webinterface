/**
 *
 * StatusNetworkConnections
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import StatusOverview from 'components/StatusOverview';

import StatusNetworkConnectionsReducer from './reducers';
import saga from './saga';
import { getNetworkInfo } from './actions';

export function StatusNetworkConnections({
  doGetNetworkInfo,
  lanIpAddress,
  lanSubnetMask,
  lanIpv6Address,
  wanIpAddress,
  wanSubnetMask,
  wanIpv6Address,
}) {
  const [lanValues, setLanValues] = useState([]);
  const [wanValues, setWanValues] = useState([]);

  useEffect(() => {
    doGetNetworkInfo();
  }, []);

  useEffect(() => {
    const ipv6Value = lanIpv6Address || 'N/A';
    const lanVals = [
      {
        caption: 'Link #1',
        value: 'connected',
      },
      {
        caption: 'IP Address',
        value: lanIpAddress,
      },
      {
        caption: 'Netmask',
        value: lanSubnetMask,
      },
      {
        caption: 'IPv6 Address',
        value: ipv6Value,
      },
    ];
    setLanValues(lanVals);
  }, [lanIpAddress, lanSubnetMask, lanIpv6Address]);

  useEffect(() => {
    const ipv6Value = wanIpv6Address || 'N/A';
    const wanVals = [
      {
        caption: 'IP Address',
        value: wanIpAddress,
      },
      {
        caption: 'Netmask',
        value: wanSubnetMask,
      },
      {
        caption: 'IPv6 Address',
        value: ipv6Value,
      },
    ];
    setWanValues(wanVals);
  }, [wanIpAddress, wanSubnetMask, wanIpv6Address]);

  const networkData = {
    wifi: {
      caption: 'Wireless Network',
      values: wanValues,
    },
    lan: {
      caption: 'Local Network',
      values: lanValues,
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
  lanIpAddress: PropTypes.string,
  lanSubnetMask: PropTypes.string,
  lanIpv6Address: PropTypes.string,
  wanIpAddress: PropTypes.string,
  wanSubnetMask: PropTypes.string,
  wanIpv6Address: PropTypes.string,
};

const mapStateToProps = state => ({
  lanIpAddress: state.StatusNetworkConnections.lan.ipAddress,
  lanSubnetMask: state.StatusNetworkConnections.lan.subnetMask,
  lanIpv6Address: state.StatusNetworkConnections.lan.ipv6Address,
  wanIpAddress: state.StatusNetworkConnections.wan.ipAddress,
  wanSubnetMask: state.StatusNetworkConnections.wan.subnetMask,
  wanIpv6Address: state.StatusNetworkConnections.wan.ipv6Address,
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

const withReducer = injectReducer({
  key: 'StatusNetworkConnections',
  reducer: StatusNetworkConnectionsReducer,
});

const withSaga = injectSaga({
  key: 'StatusNetworkConnections',
  saga,
  mode: DAEMON,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StatusNetworkConnections);
