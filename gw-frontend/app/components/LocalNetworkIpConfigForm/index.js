/**
 *
 * LocalNetworkIpConfigForm
 *
 */

import React, { useState } from 'react';
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

const IpV6Wrapper = styled.div`
  display: contents;
`;

// TODO: Add alias address form
function LocalNetworkIpConfigForm() {

  const [enableIPv6, setEnableIPv6] = useState(false);

  const schema = Yup.object({
    ipAddress: Yup.string()
      .required('Required')
      .matches(/(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, 'Not a valid IPv4 address'),
    subnetMask: Yup.string()
      .required('Required')
      .matches(/(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/, 'Not a valid subnet mask'),
    mtu: Yup.number()
      .positive('Please enter a number bigger 0'),
    ipAddressV6: Yup.string()
      .matches(/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/, 'Not a valid IPv6 address '),
    hostname: Yup.string()
      .required('Required')
  });

  const formik = useFormik({
    initialValues: {
      ipAddress: '',
      subnetMask: '',
      mtu: 1500,
      addressType: 'static',
      ipAddressV6: '',
      hostname: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: schema
  });

  const toggleCheckbox = event => {
    setEnableIPv6(event.target.checked);
  }

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="hostname">Hostname</label>
      <input type="text" name="hostname" {...formik.getFieldProps('hostname')} />
      {formik.touched.hostname && formik.errors.hostname ? (
          <div>{formik.errors.hostname}</div>
        ) : null
      }

      <label htmlFor="ipAddress">IP Address</label>
      <input type="text" name="ipAddress" {...formik.getFieldProps('ipAddress')} />
      {formik.touched.ipAddress && formik.errors.ipAddress ? (
          <div>{formik.errors.ipAddress}</div>
        ) : null
      }

      <label htmlFor="subnetMask">Subnet Mask</label>
      <input type="text" name="subnetMask" {...formik.getFieldProps('subnetMask')} />
      {formik.touched.subnetMask && formik.errors.subnetMask ? (
          <div>{formik.errors.subnetMask}</div>
        ) : null
      }

      <label htmlFor="mtu">MTU</label>
      <input type="number" name="mtu" {...formik.getFieldProps('mtu')} />
      {formik.touched.mtu && formik.errors.mtu ? (
          <div>{formik.errors.mtu}</div>
        ) : null
      }

      <label htmlFor="enableIPv6">Enable IPv6
        <CheckboxWrapper name="enableIPv6" checked={enableIPv6} onChange={(event) => toggleCheckbox(event)} type="checkbox" />
      </label>

      {enableIPv6 ? (
        <IpV6Wrapper>
          <label htmlFor="ipAddressV6">IPv6 static address</label>
          <input type="text" name="ipAddressV6" {...formik.getFieldProps('ipAddressV6')} />
          {formik.touched.ipAddressV6 && formik.errors.ipAddressV6 ? (
              <div>{formik.errors.ipAddressV6}</div>
            ) : null
          }
        </IpV6Wrapper>
      ) : null}

      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

LocalNetworkIpConfigForm.propTypes = {};

export default LocalNetworkIpConfigForm;
