/**
 *
 * Label
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin-left: 1em;
`;

function Label({ text, labelFor }) {
  return <StyledLabel htmlFor={labelFor}>{text}</StyledLabel>;
}

Label.propTypes = {
  text: PropTypes.string,
  labelFor: PropTypes.string,
};

export default Label;
