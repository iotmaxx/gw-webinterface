/**
 *
 * MenuDropdownGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DownChevron from '../../assets/icons/DownChevron.svg';
import RightChevron from '../../assets/icons/RightChevron.svg';

function MenuDropdownGroup({ caption, children, subcategory = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const Wrapper = styled.div`
    margin-left: ${subcategory ? 2 : 1}rem;
  `;

  const StyledDT = styled.dt`
    margin-top: 10px;
    color: white;
  `;

  const Arrow = styled.img`
    height: 1rem;
    margin-right: 1rem;
  `;

  const StyledDL = styled.dl`
    display: ${isOpen ? 'block' : 'none'};
    margin-top: 16px;
    margin-bottom: 16px;
  `;

  return (
    <Wrapper>
      <StyledDT onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Arrow src={DownChevron} /> : <Arrow src={RightChevron} />}
        {caption}
      </StyledDT>
      <StyledDL>{children}</StyledDL>
    </Wrapper>
  );
}

MenuDropdownGroup.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  subcategory: PropTypes.bool,
};

export default MenuDropdownGroup;
