/**
 *
 * StatusOverview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, TD, TR } from 'containers/App/constants';

function StatusOverview({ caption, values = [] }) {
  const tableContent = values.map((val, idx) => (
    <TR key={idx}>
      <th>{val.caption}</th>
      <TD>{val.value}</TD>
      {val.additionalValues && <TD>{val.additionalValues.join(', ')}</TD>}
    </TR>
  ));

  return (
    <Table>
      <caption>{caption}</caption>
      <tbody>{tableContent}</tbody>
    </Table>
  );
}

StatusOverview.propTypes = {
  caption: PropTypes.string,
  values: PropTypes.array,
};

export default StatusOverview;
