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

import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

export function LocalNetworkDhcpServer() {
  const submit = values => {
    console.log(values);
    ToastsStore.success("Success, your changes have been submitted!");
  }
  
  return (
    <div>
      <LocalNetworkDhcpConfigForm submit={submit} />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
    </div>
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
