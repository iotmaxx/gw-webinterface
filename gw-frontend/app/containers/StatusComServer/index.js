/**
 *
 * StatusComServer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

const VALUES = [
  {
    caption: 'Link',
    value: 'Disabled',
  },
];

export function StatusComServer() {
  return <StatusOverview caption="ComSERVER Status" values={VALUES} />;
}

StatusComServer.propTypes = {
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

export default compose(withConnect)(StatusComServer);
