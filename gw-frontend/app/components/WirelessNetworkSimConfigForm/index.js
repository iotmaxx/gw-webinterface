/**
 *
 * WirelessNetworkSimConfigForm
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import {
  FormWrapper,
  CenterButton,
  LightTableRow,
  DarkTableRow,
  InputCell,
  LabelCell,
  TableTitle,
} from 'containers/App/constants';

import Label from '../Label';
import Input from '../FormikInput';

const CheckboxWrapper = styled.input`
  margin-left: 10px;
  height: 20px;
  width: 20px;
  vertical-align: text-bottom;
`;

/*
const PROVIDERS = [
  'auto',
  '26201 - T-Mobile D',
  '26202 - Vodafone.de',
  '26203 - E-Plus',
  '26207 - o2-de',
  '26208 - o2-de',
];
*/

const AUTHENTICATION = ['None', 'PAP only', 'CHAP only', 'PAP/CHAP'];

function WirelessNetworkSimConfigForm({ submit, formTitle }) {
  // const [provider, setProvider] = useState(PROVIDERS[0]);
  const [roamingEnabled, setRoamingEnabled] = useState(true);
  const [auth, setAuth] = useState(AUTHENTICATION[0]);

  const schema = Yup.object({
    pin: Yup.string(),
    apn: Yup.string().required('Required'),
    username: Yup.string(),
    password: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      pin: '',
      apn: '',
      provider: '',
      authentication: '',
      username: '',
      password: '',
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
    enableReinitialize: true,
  });

  const toggleCheckbox = event => {
    setRoamingEnabled(event.target.checked);
  };

  /*
  const changeProvider = event => {
    setProvider(event.target.value);
  };
  */

  const changeAuth = event => {
    setAuth(event.target.value);
  };

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <TableTitle>{formTitle}</TableTitle>
      <table>
        <tbody>
          <LightTableRow>
            <LabelCell>
              <Label text="PIN" labelFor="pin" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="pin"
                placeholder="1234"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.pin}
                errors={formik.errors.pin}
              />
            </InputCell>
          </LightTableRow>
          <DarkTableRow>
            <LabelCell colSpan={2}>
              <Label text="Roaming enabled" htmlFor="enableRoaming" />
              <CheckboxWrapper
                name="enableRoaming"
                checked={roamingEnabled}
                onChange={event => toggleCheckbox(event)}
                type="checkbox"
              />
            </LabelCell>
          </DarkTableRow>
          {/*
          <LightTableRow>
            <LabelCell>
              <Label text="Provider" labelFor="provider" />
            </LabelCell>
            <InputCell>
              <select
                value={provider}
                onChange={event => changeProvider(event)}
                disabled={!roamingEnabled}
              >
                {PROVIDERS.map(pro => (
                  <option value={pro} key={pro}>
                    {pro}
                  </option>
                ))}
              </select>
            </InputCell>
          </LightTableRow>
          */}
          <DarkTableRow>
            <LabelCell>
              <Label text="APN" labelFor="apn" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="apn"
                placeholder="internet.x-mobile"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.apn}
                errors={formik.errors.apn}
              />
            </InputCell>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Authentication" labelFor="authentication" />
            </LabelCell>
            <InputCell>
              <select value={auth} onChange={event => changeAuth(event)}>
                {AUTHENTICATION.map(aut => (
                  <option value={aut} key={aut}>
                    {aut}
                  </option>
                ))}
              </select>
            </InputCell>
          </LightTableRow>
          {auth !== 'None' ? (
            <DarkTableRow>
              <LabelCell>
                <Label text="Username" labelFor="username" />
              </LabelCell>
              <InputCell>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  formik={formik}
                />
                <FormFieldError
                  touched={formik.touched.username}
                  errors={formik.errors.username}
                />
              </InputCell>
            </DarkTableRow>
          ) : null}
          {auth !== 'None' ? (
            <LightTableRow>
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
            </LightTableRow>
          ) : null}
        </tbody>
      </table>
      <CenterButton type="submit">Apply</CenterButton>
    </FormWrapper>
  );
}

WirelessNetworkSimConfigForm.propTypes = {
  submit: PropTypes.func,
  formTitle: PropTypes.string,
};

export default WirelessNetworkSimConfigForm;
