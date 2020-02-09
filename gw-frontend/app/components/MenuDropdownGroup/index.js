/**
 *
 * MenuDropdownGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';

import DownChevron from '../../assets/icons/DownChevron.svg';
import RightChevron from '../../assets/icons/RightChevron.svg';

function MenuDropdownGroup({caption, children, subcategory=false}) {

  const [isOpen, setIsOpen] = useState(false);

  const Wrapper = styled.div`
    margin-left: ${subcategory ? 1 : 0}rem;
  `;

  const StyledDT = styled.dt`
    font-weight: 600;
    margin-top: 10px;
    color: ${MAIN_COLORS.cyan};
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
        {
          isOpen ? <Arrow src={DownChevron} /> : <Arrow src={RightChevron}/>
        }
        {caption}
      </StyledDT>
      <StyledDL>
        {children}
      </StyledDL>
    </Wrapper>
  );
}

MenuDropdownGroup.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node
};

export default MenuDropdownGroup;
