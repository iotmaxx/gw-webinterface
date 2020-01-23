/**
 *
 * LocalNetworkDhcpServer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LocalNetworkDhcpConfigForm from 'components/LocalNetworkDhcpConfigForm';

export function LocalNetworkDhcpServer() {
  return (
    <LocalNetworkDhcpConfigForm />
  );
}

LocalNetworkDhcpServer.propTypes = {
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

export default compose(withConnect)(LocalNetworkDhcpServer);
