/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/icons/Logo.svg';

import { MAIN_COLORS } from 'containers/App/constants';

const StyledHeader = styled.div`
  background-color: ${MAIN_COLORS.orange};
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
`;

const StyledImage = styled.img`
  width: 20%;
  height: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledImage src={Logo} />
    </StyledHeader>
  );
}

Header.propTypes = {};

export default Header;
