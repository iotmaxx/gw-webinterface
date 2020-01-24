/**
 *
 * WirelessNetworkSimConfigForm
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormWrapper = styled.form`
  display: grid;
`;

const CheckboxWrapper = styled.input`
  margin-left: 10px;
  height: 20px;
  width: 20px;
  vertical-align: text-bottom;
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
    pin: Yup.number()
      .positive('Please enter a positive number'),
    apn: Yup.string()
      .required('Required'),
    username: Yup.string(),
    password: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      pin: '',
      apn: '',
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
    <FormWrapper>
      <label htmlFor="pin">PIN</label>
      <input name="pin" {...formik.getFieldProps('pin')} />
      {formik.touched.pin && formik.errors.pin ? (
          <div>{formik.errors.pin}</div>
        ) : null
      }

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
      <input name="apn" {...formik.getFieldProps('apn')} />
      {formik.touched.apn && formik.errors.apn ? (
          <div>{formik.errors.apn}</div>
        ) : null
      }

      <label htmlFor="authentication">Authentication</label>
      <select value={auth} onChange={(event) => changeAuth(event)}>
        {
          AUTHENTICATION.map(aut => <option value={aut} key={aut}>{aut}</option>)
        }
      </select>

      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

WirelessNetworkSimConfigForm.propTypes = {};

export default WirelessNetworkSimConfigForm;
