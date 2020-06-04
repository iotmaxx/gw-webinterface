/**
 *
 * StatusTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, TD, TR } from 'containers/App/constants';

function StatusTable({ caption = '', values = [] }) {
  const tableHeader = (
    <TR>
      {values.map((value, idx) => (
        <th key={idx}>{value.caption}</th>
      ))}
    </TR>
  );

  let range = 0;
  values.forEach(element => {
    if (element.values.length > range) range = element.values.length;
  });

  const rows = [];
  for (let i = 0; i < range; i++) {
    const cellValues = [];
    values.map((element, idx) => {
      const cellValue = element.values.length > i ? element.values[i] : '';
      cellValues.push(<TD key={`${i}-${idx}`}>{cellValue}</TD>);
    });
    rows.push(<TR key={i}>{cellValues}</TR>);
  }

  return (
    <Table>
      <caption>{caption}</caption>
      <tbody>
        {tableHeader}
        {rows}
      </tbody>
    </Table>
  );
}

StatusTable.propTypes = {
  caption: PropTypes.string,
  values: PropTypes.array,
};

export default StatusTable;
