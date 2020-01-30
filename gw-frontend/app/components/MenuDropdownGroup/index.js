/**
 *
 * MenuDropdownGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MAIN_COLORS } from 'containers/App/constants';

function MenuDropdownGroup({caption, children, subcategory=false}) {

  const [isOpen, setIsOpen] = useState(false);

  const StyledDT = styled.dt`
    font-weight: 600;
    margin-top: 10px;
    margin-left: ${subcategory ? 10 : 0}px;
    color: ${MAIN_COLORS.cyan};
  `;

  const ArrowDown = styled.span`
    display: inline-block;  
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    color: ${MAIN_COLORS.cyan};
  `;

  const ArrowRight = styled.span`
    color: ${MAIN_COLORS.cyan};
  `;

  const StyledDL = styled.dl`
    display: ${isOpen ? 'block' : 'none'};
    margin-top: 16px;
    margin-bottom: 16px;
  `;

  return (
    <div>
      <StyledDT onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen ? <ArrowDown>&#10148; </ArrowDown> : <ArrowRight>&#10148; </ArrowRight>
        }
        {caption}
      </StyledDT>
      <StyledDL>
        {children}
      </StyledDL>
    </div>
  );
}

MenuDropdownGroup.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node
};

export default MenuDropdownGroup;
