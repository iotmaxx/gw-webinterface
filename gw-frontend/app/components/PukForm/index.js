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

import FormFieldError from 'components/FormFieldError';

import {YUP_VALIDATORS} from 'containers/App/constants';

const FormWrapper = styled.form`
  display: grid;
`;

// TODO: change clickHandler to normal submit after Mockup phase
function PukForm({clickHandler}) {

  const schema = Yup.object({
    puk: YUP_VALIDATORS.positiveNumber
      .required('Required')
  });

  const formik = useFormik({
    initialValues: {
      puk: ''
    },
    onSubmit: values => {
      console.log(values);
      clickHandler();
    },
    validationSchema: schema
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="puk">Please provide PUK</label>
      <input type="text" name="puk" {...formik.getFieldProps('puk')} />
      <FormFieldError 
        touched={formik.touched.puk}
        errors={formik.errors.puk}
      />
      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

PukForm.propTypes = {
  clickHandler: PropTypes.func
};

export default PukForm;
