/**
 *
 * PukForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormWrapper = styled.form`
  display: grid;
`;

// TODO: change clickHandler to normal submit after Mockup phase
function PukForm({clickHandler}) {

  const schema = Yup.object({
    pin: Yup.number()
      .positive('Please enter a positive number')
  });

  const formik = useFormik({
    initialValues: {
      puk: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: schema
  });

  return (
    <FormWrapper>
      <label htmlFor="puk">Please provide PUK</label>
      <input type="text" name="puk" {...formik.getFieldProps('puk')} />
      {formik.touched.puk && formik.errors.puk ? (
          <div>{formik.errors.puk}</div>
        ) : null
      }
      <button onClick={clickHandler}>Apply</button>
    </FormWrapper>
  );
}

PukForm.propTypes = {
  clickHandler: PropTypes.func
};

export default PukForm;
