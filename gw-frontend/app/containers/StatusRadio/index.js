/**
 *
 * StatusRadio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

const VALUES = [
  {
    caption: 'Provider',
    value: 'Beispiel-Provider',
  },
  {
    caption: 'Network Status',
    value: 'busy'
  },
  {
    caption: 'Signal Level',
    value: '-83 dBm'
  },
  {
    caption: 'Packet Data',
    value: 'offline'
  },
  {
    caption: 'SIM #1 IMSI',
    value: '123456789012345'
  },
  {
    caption: 'Local area code',
    value: '579'
  },
  {
    caption: 'Cell ID',
    value: '2606587'
  }
]

export function StatusRadio() {

  return (
      <StatusOverview caption="Radio Status" values={VALUES}/>
  );
}

StatusRadio.propTypes = {
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

export default compose(withConnect)(StatusRadio);
