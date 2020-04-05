/**
 *
 * StatusRoutingTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusTable from 'components/StatusTable';

const ROUTE_VALUES = [
  {
    caption: 'Destination',
    values: ['0.0.0.0', '192.168.122.0'],
  },
  {
    caption: 'Gateway',
    values: ['192.168.122.1', '0.0.0.0'],
  },
  {
    caption: 'Genmask',
    values: ['0.0.0.0', '255.255.255.0'],
  },
  {
    caption: 'Flags',
    values: ['UG', 'U'],
  },
  {
    caption: 'Metric',
    values: ['0', '0'],
  },
  {
    caption: 'Ref',
    values: ['0', '0'],
  },
  {
    caption: 'Use',
    values: ['0', '0'],
  },
  {
    caption: 'Iface',
    values: ['eth0', 'eth0'],
  },
];

const HOP_VALUES = [
  {
    caption: 'Destination',
    values: [
      '2a01:4f8:201:860f::/64',
      'fe80::/64',
      '::/0',
      '::1/128',
      '2a01:4f8:201:860f:5054:ff:fea6:a808/128',
      'fe80::5054:ff:fea6:a808/128',
      'ff00::/8',
    ],
  },
  {
    caption: 'Next Hop',
    values: ['::', '::', 'fe80::5054:ff:fe7e:6a61', '::', '::', '::', '::'],
  },
  {
    caption: 'Flags',
    values: ['UA', 'U', 'UGDA', 'U', 'U', 'U', 'U'],
  },
  {
    caption: 'Metric',
    values: [256, 256, 1024, 0, 0, 0, 256],
  },
  {
    caption: 'Ref',
    values: [0, 0, 2437, 535, 2454, 4819, 2896924],
  },
  {
    caption: 'Use',
    values: [0, 0, 1, 2, 2, 2, 1],
  },
  {
    caption: 'Iface',
    values: ['eth0', 'eth0', 'eth0', 'lo', 'lo', 'lo', 'eth0'],
  },
];

export function StatusRoutingTable() {
  return (
    <div>
      <StatusTable caption="Kernel IP routing table" values={ROUTE_VALUES} />
      <StatusTable values={HOP_VALUES} />
    </div>
  );
}

StatusRoutingTable.propTypes = {
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

export default compose(withConnect)(StatusRoutingTable);
