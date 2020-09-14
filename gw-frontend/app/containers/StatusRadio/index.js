/**
 *
 * StatusRadio
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

import GsmReducer from '../WirelessNetworkSim/reducers';
import saga from '../WirelessNetworkSim/saga';
import { getModemInfo } from '../WirelessNetworkSim/actions';

export function StatusRadio({
  doGetModemInfo,
  provider,
  networkStatus,
  signalLevel,
  packetData,
  sim,
}) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const val = [
      {
        caption: 'Provider',
        value: provider,
      },
      {
        caption: 'Network Status',
        value: networkStatus,
      },
      {
        caption: 'Signal Level',
        value: signalLevel,
      },
      {
        caption: 'Packet Data',
        value: packetData,
      },
      {
        caption: 'SIM #1 IMSI',
        value: sim,
      },
      {
        caption: 'Local area code',
        value: 'N/A',
      },
      {
        caption: 'Cell ID',
        value: 'N/A',
      },
    ];
    setValues(val);
    doGetModemInfo();
  }, []);

  return <StatusOverview caption="Radio Status" values={values} />;
}

StatusRadio.propTypes = {
  doGetModemInfo: PropTypes.func,
  provider: PropTypes.string,
  networkStatus: PropTypes.string,
  signalLevel: PropTypes.string,
  packetData: PropTypes.string,
  sim: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    doGetModemInfo: () => {
      dispatch(getModemInfo());
    },
  };
}

const mapStateToProps = state => ({
  provider: state.WirelessNetworkSim.GPP.operatorname,
  networkStatus: state.WirelessNetworkSim.Status.state,
  signalLevel: state.WirelessNetworkSim.Status.signalquality,
  packetData: state.WirelessNetworkSim.Status.powerstate,
  sim: state.WirelessNetworkSim.GPP.imei,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'LocalNetworkIpConfig',
  saga,
  mode: DAEMON,
});

const withReducer = injectReducer({
  key: 'WirelessNetworkSim',
  reducer: GsmReducer,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StatusRadio);
