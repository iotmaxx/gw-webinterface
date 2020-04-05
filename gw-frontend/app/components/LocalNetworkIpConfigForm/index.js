/**
 *
 * LocalNetworkIpConfigForm
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import { YUP_VALIDATORS } from 'containers/App/constants';

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
function LocalNetworkIpConfigForm({
  submit,
  mtu,
  hostname,
  ipAddress,
  subnetMask,
}) {
  const [enableIPv6, setEnableIPv6] = useState(false);

  const schema = Yup.object({
    ipAddress: YUP_VALIDATORS.ipV4Field.required('Required'),
    subnetMask: Yup.string()
      .required('Required')
      .matches(
        /(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/,
        'Not a valid subnet mask',
      ),
    mtu: YUP_VALIDATORS.positiveNumber,
    ipAddressV6: Yup.string().matches(
      /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
      'Not a valid IPv6 address ',
    ),
    hostname: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      ipAddress: ipAddress,
      subnetMask: subnetMask,
      mtu: mtu,
      addressType: 'static',
      ipAddressV6: '',
      hostname: hostname,
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
  });

  const toggleCheckbox = event => {
    setEnableIPv6(event.target.checked);
  };

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="hostname">Hostname</label>
      <input
        type="text"
        name="hostname"
        placeholder="localhost"
        {...formik.getFieldProps('hostname')}
      />
      <FormFieldError
        touched={formik.touched.hostname}
        errors={formik.errors.hostname}
      />

      <label htmlFor="ipAddress">IP Address</label>
      <input
        type="text"
        name="ipAddress"
        placeholder="127.0.0.1"
        {...formik.getFieldProps('ipAddress')}
      />
      <FormFieldError
        touched={formik.touched.ipAddress}
        errors={formik.errors.ipAddress}
      />

      <label htmlFor="subnetMask">Subnet Mask</label>
      <input
        type="text"
        name="subnetMask"
        placeholder="255.255.255.0"
        {...formik.getFieldProps('subnetMask')}
      />
      <FormFieldError
        touched={formik.touched.subnetMask}
        errors={formik.errors.subnetMask}
      />

      <label htmlFor="mtu">MTU</label>
      <input
        type="number"
        name="mtu"
        placeholder="1500"
        {...formik.getFieldProps('mtu')}
      />
      <FormFieldError touched={formik.touched.mtu} errors={formik.errors.mtu} />

      <label htmlFor="enableIPv6">
        Enable IPv6
        <CheckboxWrapper
          name="enableIPv6"
          checked={enableIPv6}
          onChange={event => toggleCheckbox(event)}
          type="checkbox"
        />
      </label>

      {enableIPv6 ? (
        <IpV6Wrapper>
          <label htmlFor="ipAddressV6">IPv6 static address</label>
          <input
            type="text"
            name="ipAddressV6"
            placeholder="00:00:00:00:00:00"
            {...formik.getFieldProps('ipAddressV6')}
          />
          <FormFieldError
            touched={formik.touched.ipAddressV6}
            errors={formik.errors.ipAddressV6}
          />
        </IpV6Wrapper>
      ) : null}

      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

LocalNetworkIpConfigForm.propTypes = {
  submit: PropTypes.func,
  mtu: PropTypes.number,
  hostname: PropTypes.string,
  ipAddress: PropTypes.string,
  subnetMask: PropTypes.string,
};

export default LocalNetworkIpConfigForm;
