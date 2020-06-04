/**
 *
 * StatusIoStats
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

const IN_VALUES = [
  {
    caption: '#1',
    value: 'low',
    additionalValues: ['SMS', 'eMail'],
  },
];

const OUT_VALUES = [
  {
    caption: '#2',
    value: 'off',
    additionalValues: ['manual'],
  },
];

// TODO: Adjust table title to meet menu point
export function StatusIoStats() {
  return (
    <div>
      <StatusOverview caption="Input" values={IN_VALUES} />
      <StatusOverview caption="Output" values={OUT_VALUES} />
    </div>
  );
}

StatusIoStats.propTypes = {
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

export default compose(withConnect)(StatusIoStats);
