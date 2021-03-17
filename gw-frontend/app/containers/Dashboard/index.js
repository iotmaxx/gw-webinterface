/**
 *
 * Dashboard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import styled from 'styled-components';

import { BUILD_TIME, GIT_REVISION, VERSION_CODE } from '../App/constants';

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
      <StyledSpan>Welcome to the IoTmaxx-Gateway dashboard!</StyledSpan>
      <p>Software-Version: {VERSION_CODE}</p>
      <p>Checksum: {GIT_REVISION}</p>
      <p>Build: {BUILD_TIME}</p>
    </Wrapper>
  );
}

Dashboard.propTypes = {};

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
