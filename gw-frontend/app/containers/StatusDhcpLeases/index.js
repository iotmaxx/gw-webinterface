/**
 *
 * StatusDhcpLeases
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusTable from 'components/StatusTable';

const VALUES = [
  {
    caption: 'Host Name',
    values: ['raspberrypi', 'thinkpad', 'DMP117', 'Vbox8', 'S685-IP']
  },
  {
    caption: 'Client MAC address',
    values: ['B8-27-EB-75-F1-CE', '00-16-6F-81-47-B2', '00-05-CD-13-9E-2F', '08-00-27-48-75-8D', '7C-2F-80-15-62-D5']
  },
  {
    caption: 'Client IP Address',
    values: ['192.168.2.102', '192.168.2.105', '192.168.2.117', '192.168.2.127', '192.168.2.129']
  }
]

export function StatusDhcpLeases() {
  return (
    <StatusTable caption="DHCP Leases" values={VALUES} />
  );
}

StatusDhcpLeases.propTypes = {
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

export default compose(withConnect)(StatusDhcpLeases);
