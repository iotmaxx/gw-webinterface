/**
 *
 * WirelessNetworkSimConfigForm
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import {YUP_VALIDATORS} from 'containers/App/constants';

const FormWrapper = styled.form`
  display: grid;
`;

const CheckboxWrapper = styled.input`
  margin-left: 10px;
  height: 20px;
  width: 20px;
  vertical-align: text-bottom;
`;

const AuthenticationWrapper = styled.div`
  display: contents;
`;

const PROVIDERS = [
  'auto',
  '26201 - T-Mobile D',
  '26202 - Vodafone.de',
  '26203 - E-Plus',
  '26207 - o2-de',
  '26208 - o2-de'
]

const AUTHENTICATION = [
  'None',
  'PAP only',
  'CHAP only',
  'PAP/CHAP'
]

// TODO: Remove Mockup Auth and Providers
// TODO: Add Country
function WirelessNetworkSimConfigForm() {
  const [roamingEnabled, setRoamingEnabled] = useState(true);
  const [provider, setProvider] = useState(PROVIDERS[0]);
  const [auth, setAuth] = useState(AUTHENTICATION[0]);

  const schema = Yup.object({
    pin: YUP_VALIDATORS.positiveNumber,
    apn: Yup.string()
      .required('Required'),
    username: Yup.string(),
    password: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      pin: '',
      apn: '',
      provider: '',
      authentication: '',
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: schema
  });
  
  const toggleCheckbox = event => {
    setRoamingEnabled(event.target.checked);
  }

  const changeProvider = event => {
    setProvider(event.target.value);
  }

  const changeAuth = event => {
    setAuth(event.target.value);
  }

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="pin">PIN</label>
      <input type="text" name="pin" placeholder="1234" {...formik.getFieldProps('pin')} />
      <FormFieldError 
        touched={formik.touched.pin}
        errors={formik.errors.pin}
      />

      <label htmlFor="enableRoaming">Roaming enabled
        <CheckboxWrapper name="enableRoaming" checked={roamingEnabled} onChange={(event) => toggleCheckbox(event)} type="checkbox" />
      </label>
      
      <label htmlFor="provider">Provider</label>
      <select value={provider} onChange={(event) => changeProvider(event)} disabled={!roamingEnabled}>
        {
          PROVIDERS.map(pro => <option value={pro} key={pro}>{pro}</option>)
        }
      </select>

      <label htmlFor="apn">APN</label>
      <input type="text" name="apn" placeholder="internet.x-mobile" {...formik.getFieldProps('apn')} />
      <FormFieldError 
        touched={formik.touched.apn}
        errors={formik.errors.apn}
      />

      <label htmlFor="authentication">Authentication</label>
      <select value={auth} onChange={(event) => changeAuth(event)}>
        {
          AUTHENTICATION.map(aut => <option value={aut} key={aut}>{aut}</option>)
        }
      </select>
      
      {auth !== 'None' ? (
        <AuthenticationWrapper>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" {...formik.getFieldProps('username')} />
          <FormFieldError 
            touched={formik.touched.username}
            errors={formik.errors.username}
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" {...formik.getFieldProps('password')} />
          <FormFieldError 
            touched={formik.touched.password}
            errors={formik.errors.password}
          />
        </AuthenticationWrapper>
      ) : null}

      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

WirelessNetworkSimConfigForm.propTypes = {};

export default WirelessNetworkSimConfigForm;
