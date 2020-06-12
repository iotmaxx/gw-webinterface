/**
 *
 * RoutingTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Table, TD, TR } from 'containers/App/constants';

const getRows = (values, firstColSpan) => {
  let range = 0;
  values.forEach(element => {
    if (element.values.length > range) range = element.values.length;
  });
  const rows = [];
  for (let i = 0; i < range; i++) {
    const cellValues = [];
    values.map((element, idx) => {
      const cellValue = element.values.length > i ? element.values[i] : '';
      if (firstColSpan)
        cellValues.push(
          <TD colSpan={idx === 0 ? 2 : 1} key={`${i}-${idx}`}>
            {cellValue}
          </TD>,
        );
      else cellValues.push(<TD key={`${i}-${idx}`}>{cellValue}</TD>);
    });
    rows.push(<TR key={i}>{cellValues}</TR>);
  }
  return rows;
};

function RoutingTable({ caption, values }) {
  const tableRoutingHeader = (
    <TR>
      {values[0].map((value, idx) => (
        <th key={idx}>{value.caption}</th>
      ))}
    </TR>
  );
  const routingRows = getRows(values[0]);

  const tableHopHeader = (
    <TR>
      {values[1].map((value, idx) => (
        <th colSpan={idx === 0 ? 2 : 1} key={idx}>
          {value.caption}
        </th>
      ))}
    </TR>
  );
  const hopRows = getRows(values[1], true);

  return (
    <Table>
      <caption>{caption}</caption>
      <tbody>
        {tableRoutingHeader}
        {routingRows}
        {tableHopHeader}
        {hopRows}
      </tbody>
    </Table>
  );
}

RoutingTable.propTypes = {
  caption: PropTypes.string,
  values: PropTypes.array,
};

export default RoutingTable;
