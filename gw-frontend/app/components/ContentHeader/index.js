/**
 *
 * ContentHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${MAIN_COLORS.contentHeaderBackground};
`;

const ContentHeaderTitle = styled.p`
  font-size: large;
  font-weight: bold;
  margin-left: 1rem;
`;

const UpdateTime = styled.p`
  margin-right: 1rem;
`;

function ContentHeader() {
  return (
    <Wrapper>
      <ContentHeaderTitle>Gateway: GW4100</ContentHeaderTitle>
      <UpdateTime>Last update:13:43:48</UpdateTime>
    </Wrapper>
  );
}

ContentHeader.propTypes = {};

export default ContentHeader;
