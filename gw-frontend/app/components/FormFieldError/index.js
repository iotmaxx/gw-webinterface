/**
 *
 * FormFieldError
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.p`
  color: red;
  margin-bottom: 0px;
  margin-top: 5px;
`;

function FormFieldError({ touched, errors }) {
  const Wrapper = styled.div`
    display: ${touched && errors ? 'block' : 'none'};
  `;

  return (
    <Wrapper>
      <StyledP>{errors}</StyledP>
    </Wrapper>
  );
}

FormFieldError.propTypes = {
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

export default FormFieldError;
