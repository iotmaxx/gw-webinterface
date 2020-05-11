/**
 *
 * MenuDropdownItem
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';

import Minus from '../../assets/icons/Minus.svg';

function MenuDropdownItem({ to, caption, depth = 1 }) {
  const StyledLink = styled(Link)`
    color: ${MAIN_COLORS.white};
    text-decoration: none;
  `;

  const StyledDD = styled.dd`
    margin-left: ${depth * 2}rem;
  `;

  const Indicator = styled.img`
    height: 1rem;
    margin-right: 1rem;
  `;

  return (
    <StyledDD>
      <Indicator src={Minus} />
      <StyledLink to={to}>{caption}</StyledLink>
    </StyledDD>
  );
}

MenuDropdownItem.propTypes = {
  to: PropTypes.string,
  caption: PropTypes.string,
  depth: PropTypes.number,
};

export default MenuDropdownItem;
