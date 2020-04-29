/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';
import IotMaxx from '../../assets/icons/iotmaxx.png';

const StyledHeader = styled.div`
  background-color: ${MAIN_COLORS.white};
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${MAIN_COLORS.headerBorderColor};
`;

const StyledImage = styled.img`
  width: max-content;
  height: max-content;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledImage src={IotMaxx} />
    </StyledHeader>
  );
}

Header.propTypes = {};

export default Header;
