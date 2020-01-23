/**
 *
 * WirelessNetworkBackupSim
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WirelessNetworkSimConfigForm from 'components/WirelessNetworkSimConfigForm';

export function WirelessNetworkBackupSim() {
  return (
    <WirelessNetworkSimConfigForm />
  );
}

WirelessNetworkBackupSim.propTypes = {
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

export default compose(withConnect)(WirelessNetworkBackupSim);
