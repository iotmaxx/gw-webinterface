/**
 *
 * MenuDropdownGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import MenuDropdownItem from 'components/MenuDropdownItem';

function MenuDropdownGroup({caption, children}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <p onClick={() => setIsOpen(!isOpen)}>{caption}</p>
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
