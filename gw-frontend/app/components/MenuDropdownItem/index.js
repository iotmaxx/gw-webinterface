/**
 *
 * MenuDropdownItem
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function MenuDropdownItem({to, caption, depth=1}) {
  const StyledLink = styled(Link)`
    color: #e16720;
    text-decoration: none;
  `;

  const StyledDD = styled.dd`
    margin-left: ${depth * 20}px;
  `;

  return (
    <StyledDD>
      <StyledLink to={to}>{caption}</StyledLink>
    </StyledDD>
  );
}

MenuDropdownItem.propTypes = {
  to: PropTypes.string,
  caption: PropTypes.string
};

export default MenuDropdownItem;
