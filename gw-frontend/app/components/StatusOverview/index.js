/**
 *
 * StatusOverview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {MAIN_COLORS} from 'containers/App/constants';

const TD = styled.td`
  text-align: right;
  border: 1px solid ${MAIN_COLORS.tableBorder};
  padding: 8px;
`;

const TR = styled.tr`
  :nth-child(odd) {
    background-color: ${MAIN_COLORS.tableEvenRowBackground};
  }
`;

function StatusOverview({caption, values=[]}) {
  const tableContent = values.map((val, idx) => (
    <TR key={idx} >
      <th>
        {val.caption}
      </th>
      <TD>
        {val.value}
      </TD>
      {val.additionalValues &&
        <TD>
          {val.additionalValues.join(', ')}
        </TD>
      }
    </TR>
  ));

  return (
    <table>
      <caption>{caption}</caption>
      <tbody>
        {tableContent}
      </tbody>
    </table>
  );
}

StatusOverview.propTypes = {
  caption: PropTypes.string,
  values: PropTypes.array
};

export default StatusOverview;
