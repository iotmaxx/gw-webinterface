/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import {
  LightTableRow,
  DarkTableRow,
  InputCell,
  LabelCell,
  CenterButton,
  FormWrapper,
  TableTitle,
} from 'containers/App/constants';

import Label from '../Label';
import Input from '../FormikInput';

function LoginForm({ submit }) {
  const schema = Yup.object({
    name: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <TableTitle>Login</TableTitle>
      <table>
        <tbody>
          <LightTableRow>
            <LabelCell>
              <Label text="Name" labelFor="name" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="name"
                placeholder="Username"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.name}
                errors={formik.errors.name}
              />
            </InputCell>
          </LightTableRow>
          <DarkTableRow>
            <LabelCell>
              <Label text="Password" labelFor="password" />
            </LabelCell>
            <InputCell>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.password}
                errors={formik.errors.password}
              />
            </InputCell>
          </DarkTableRow>
        </tbody>
      </table>
      <CenterButton type="submit">Login</CenterButton>
    </FormWrapper>
  );
}

LoginForm.propTypes = {
  submit: PropTypes.func,
};

export default LoginForm;
