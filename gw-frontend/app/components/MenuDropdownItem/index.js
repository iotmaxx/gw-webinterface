/**
 *
 * MenuDropdownItem
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

function MenuDropdownItem({to, caption}) {
  return (
    <dd>
      <Link to={to}>{caption}</Link>
    </dd>
  );
}

MenuDropdownItem.propTypes = {
  to: PropTypes.string,
  caption: PropTypes.string
};

export default MenuDropdownItem;
