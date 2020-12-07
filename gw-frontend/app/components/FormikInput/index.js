/**
 *
 * FormikInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  margin-right: 1em;
  width: auto !important;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

function FormikInput({ formik, type, name, placeholder, value, ...props }) {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      {...formik.getFieldProps({ name })}
      {...props}
    />
  );
}

FormikInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  formik: PropTypes.any,
};

export default FormikInput;
