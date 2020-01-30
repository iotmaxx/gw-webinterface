/**
 *
 * StatusSystemInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

const VALUES = [
  {
    caption: 'Uptime',
    value: '65 days, 06:56',
  },
  {
    caption: 'Load average',
    value: '0.06 0.02 0.00'
  },
  {
    caption: 'FlashTotal',
    value: '31506328 KiB'
  },
  {
    caption: 'FlashUsed',
    value: '9507220 KiB 32%'
  },
  {
    caption: 'MemTotal',
    value: '500064 KiB'
  },
  {
    caption: 'MemFree',
    value: '73356 KiB'
  },
  {
    caption: 'Buffers',
    value: '137568 KiB'
  },
  {
    caption: 'Cached',
    value: '185816 KiB'
  }
]

export function StatusSystemInfo() {
  return (
    <StatusOverview caption="System Info" values={VALUES} />
  );
}

StatusSystemInfo.propTypes = {
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

export default compose(withConnect)(StatusSystemInfo);
