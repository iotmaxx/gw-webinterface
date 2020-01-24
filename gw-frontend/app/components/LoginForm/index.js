/**
 *
 * LoginForm
 *
 */

import React from 'react';
import styled from 'styled-components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { withRouter } from "react-router-dom";

import { ACCESS_TOKEN, ROUTES } from 'containers/App/constants';

const FormWrapper = styled.form`
  display: grid;
`;

function LoginForm(props) {

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
      if (values.name === "admin" && values.password === "admin") {
        localStorage.setItem(ACCESS_TOKEN, ACCESS_TOKEN);
        props.history.push(ROUTES.dashboard);
      }
    },
    validationSchema: schema
  })

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" {...formik.getFieldProps('name')} />
      {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null
      }
      <label htmlFor="password">Password</label>
      <input type="password" name="password" {...formik.getFieldProps('password')} />
      {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null
      }
      <button type="submit">Login</button>
    </FormWrapper>
  );
}

LoginForm.propTypes = {};

export default withRouter(LoginForm)
