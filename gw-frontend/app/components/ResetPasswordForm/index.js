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
  TableHead,
  TableTitle,
} from 'containers/App/constants';

import Label from '../Label';
import Input from '../FormikInput';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ResetPasswordForm({ submit, user, password, setPassword }) {
  const schema = Yup.object({
    password: Yup.string()
      .required('Required')
      .min(6),
  });

  const formik = useFormik({
    initialValues: {
      user,
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
          <DarkTableRow colSpan={2}>
            <TableHead>
              <p>User: {user}</p>
            </TableHead>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Password" labelFor="password" />
            </LabelCell>
            <InputCell>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                formik={formik}
                onChange={e => setPassword(e.target.value)}
              />
              <FormFieldError
                touched={formik.touched.hostname}
                errors={formik.errors.hostname}
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
  user: PropTypes.string,
  password: PropTypes.string,
  setPassword: PropTypes.func,
};

export default ResetPasswordForm;
