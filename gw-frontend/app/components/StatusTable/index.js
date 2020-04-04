/**
 *
 * StatusTable
 *
 */

import React from 'react';
import PropTypes, { element } from 'prop-types';
import styled from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';

const TD = styled.td`
  text-align: center;
  border: 1px solid ${MAIN_COLORS.tableBorder};
  padding: 8px;
`;

const TR = styled.tr`
  :nth-child(odd) {
    background-color: ${MAIN_COLORS.tableEvenRowBackground};
  }
`;

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
    <table>
      <caption>{caption}</caption>
      <tbody>
        {tableHeader}
        {rows}
      </tbody>
    </table>
  );
}

StatusTable.propTypes = {
  caption: PropTypes.string,
  values: PropTypes.array,
};

export default StatusTable;
