/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const StyledSpan = styled.span`
  font-site: larger;
  font-weight: bold;
`;

export function Dashboard() {
  return (
    <Wrapper>
      <StyledSpan>Welcome to the GW-Gateway dashboard!</StyledSpan>
      <p>Software-Version: 1.0 alpha</p>
      <p>Checksum: f954c816fe3a2a69a7ab</p>
      <p>Build: 01/30/2020 8:01:46 PM</p>
    </Wrapper>
  );
}

Dashboard.propTypes = {
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

export default compose(withConnect)(Dashboard);
