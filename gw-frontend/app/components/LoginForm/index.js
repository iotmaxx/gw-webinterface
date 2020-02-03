/**
 *
 * LoginForm
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

const FormWrapper = styled.form`
  display: grid;
`;

function LoginForm({submit}) {

  const schema = Yup.object({
    name: Yup.string()
      .required('Required'),
    password: Yup.string()
      .required('Required')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema
  })

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Usernanme" {...formik.getFieldProps('name')} />
      <FormFieldError 
        touched={formik.touched.name}
        errors={formik.errors.name}
      />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" {...formik.getFieldProps('password')} />
      <FormFieldError 
        touched={formik.touched.password}
        errors={formik.errors.password}
      />
      <button type="submit">Login</button>
    </FormWrapper>
  );
}

LoginForm.propTypes = {
  submit: PropTypes.func
};

export default LoginForm
