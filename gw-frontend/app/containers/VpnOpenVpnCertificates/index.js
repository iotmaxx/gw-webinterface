/**
 *
 * VpnOpenVpnCertificates
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

export function VpnOpenVpnCertificates() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

VpnOpenVpnCertificates.propTypes = {
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

export default compose(withConnect)(VpnOpenVpnCertificates);
