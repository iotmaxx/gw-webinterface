/**
 *
 * MenuDropdownGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MenuDropdownGroup({caption, children, subcategory=false}) {

  const [isOpen, setIsOpen] = useState(false);

  const StyledDT = styled.dt`
    font-weight: 600;
    margin-top: 10px;
    margin-left: ${subcategory ? 10 : 0}px;
  `;

  const ArrowDown = styled.span`
    display: inline-block;  
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  `;

  return (
    <div>
      <StyledDT onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen ? <ArrowDown>&#10148; </ArrowDown> : <span>&#10148; </span>
        }
        {caption}
      </StyledDT>
      <dl style={{ display: isOpen ? "block" : "none" }}>
        {children}
      </dl>
    </div>
  );
}

MenuDropdownGroup.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node
};

export default MenuDropdownGroup;
