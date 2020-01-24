/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const StyledHeader = styled.div`
  background-color: #e16720;
  width: 100%;
  min-height: 10vh;
`;

function Header() {
  return (
    <StyledHeader>
      <FormattedMessage {...messages.header} />
    </StyledHeader>
  );
}

Header.propTypes = {};

export default Header;
