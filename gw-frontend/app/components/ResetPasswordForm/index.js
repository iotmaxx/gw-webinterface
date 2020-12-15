/**
 *
 * ResetPasswordForm
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

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ResetPasswordForm({
  submit,
  username,
  password,
  setPassword,
  setUsername,
}) {
  const schema = Yup.object({
    username: Yup.string(),
    password: Yup.string()
      .required('Required')
      .min(6),
  });

  const formik = useFormik({
    initialValues: {
      username,
      password,
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
    enableReinitialize: true,
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <TableTitle>Settings</TableTitle>
      <table>
        <tbody>
          <DarkTableRow>
            <LabelCell>
              <Label text="Username" labelFor="username" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                formik={formik}
                onChange={e => setUsername(e.target.value)}
              />
              <FormFieldError
                touched={formik.touched.username}
                errors={formik.errors.username}
              />
            </InputCell>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Password" labelFor="password" />
            </LabelCell>
            <InputCell>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                formik={formik}
                onChange={e => setPassword(e.target.value)}
              />
              <FormFieldError
                touched={formik.touched.password}
                errors={formik.errors.password}
              />
            </InputCell>
          </LightTableRow>
        </tbody>
      </table>
      <CenterButton type="submit">Apply</CenterButton>
    </FormWrapper>
  );
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  initialUsername: PropTypes.string,
  setPassword: PropTypes.func,
  setUsername: PropTypes.func,
};

export default ResetPasswordForm;
