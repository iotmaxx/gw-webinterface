/**
 *
 * LocalNetworkIpConfig
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LocalNetworkIpConfigForm from 'components/LocalNetworkIpConfigForm';

export function LocalNetworkIpConfig() {
  return (
    <div>
      <LocalNetworkIpConfigForm />
    </div>
  );
}

LocalNetworkIpConfig.propTypes = {
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

export default compose(withConnect)(LocalNetworkIpConfig);
