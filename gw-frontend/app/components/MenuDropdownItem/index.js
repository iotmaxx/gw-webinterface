/**
 *
 * MenuDropdownItem
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #e16720;
  text-decoration: none;
`;

function MenuDropdownItem({to, caption}) {
  return (
    <dd>
      <StyledLink to={to}>{caption}</StyledLink>
    </dd>
  );
}

MenuDropdownItem.propTypes = {
  to: PropTypes.string,
  caption: PropTypes.string
};

export default MenuDropdownItem;
