/**
 *
 * StatusOverview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Table, TD, TR } from 'containers/App/constants';
import styled from 'styled-components';

export const TableSectionHead = styled.th`
  padding: 0.5em 1em 0.5em 1em;
  border-left-color: white;
  border-left-style: solid;
  border-left-width: 2px;
  text-align: center;
  font-size: large;
`;

const getTableContent = values =>
  values.map((val, idx) => (
    <TR key={idx}>
      <th>{val.caption}</th>
      <TD>{val.value}</TD>
      {val.additionalValues && <TD>{val.additionalValues.join(', ')}</TD>}
    </TR>
  ));

function StatusOverview({ caption, values = [], asList = true }) {
  let valuesTableContent = [];
  if (asList) valuesTableContent = getTableContent(values);
  else {
    Object.keys(values).forEach(val => {
      valuesTableContent.push(
        <TR key={val}>
          <TableSectionHead colSpan={3}>{values[val].caption}</TableSectionHead>
        </TR>,
      );
      valuesTableContent.push(getTableContent(values[val].values));
    });
  }

  return (
    <Table>
      <caption>{caption}</caption>
      <tbody>{valuesTableContent}</tbody>
    </Table>
  );
}

StatusOverview.propTypes = {
  caption: PropTypes.string,
  values: PropTypes.any,
  asList: PropTypes.bool,
};

export default StatusOverview;
