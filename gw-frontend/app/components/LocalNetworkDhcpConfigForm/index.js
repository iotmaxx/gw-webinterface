/**
 *
 * LocalNetworkDhcpConfigForm
 *
 */

import React from 'react';
import styled from 'styled-components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import {YUP_VALIDATORS} from 'containers/App/constants';

const FormWrapper = styled.form`
  display: grid;
`;

function LocalNetworkDhcpConfigForm() {

  const schema = Yup.object({
    domainName: Yup.string()
      .required('Required'),
    leaseTime: Yup.string()
      .required('Required'),
    beginIpRange: YUP_VALIDATORS.ipV4Field,
    endIpRange: YUP_VALIDATORS.ipV4Field,
    clientMacAddress: Yup.string(),
    clientIpAddress: YUP_VALIDATORS.ipV4Field,
  });

  const formik = useFormik({
    initialValues: {
      domainName: '',
      leaseTime: '',
      beginIpRange: '',
      endIpRange: '',
      clientMacAddress: '',
      clientIpAddress: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: schema
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="domainName">Domain Name</label>
      <input type="text" name="domainName" {...formik.getFieldProps('domainName')} />
      <FormFieldError 
        touched={formik.touched.domainName}
        errors={formik.errors.domainName}
      />

      <label htmlFor="leaseTime">Lease Time</label>
      <input type="text" name="leaseTime" {...formik.getFieldProps('leaseTime')} />
      <FormFieldError 
        touched={formik.touched.leaseTime}
        errors={formik.errors.leaseTime}
      />

      <label htmlFor="beginIpRange">Begin IP Range</label>
      <input type="text" name="beginIpRange" {...formik.getFieldProps('beginIpRange')} />
      <FormFieldError 
        touched={formik.touched.beginIpRange}
        errors={formik.errors.beginIpRange}
      />

      <label htmlFor="endIpRange">End IP Range</label>
      <input type="text" name="endIpRange" {...formik.getFieldProps('endIpRange')} />
      <FormFieldError 
        touched={formik.touched.endIpRange}
        errors={formik.errors.endIpRange}
      />

      <label htmlFor="clientMacAddress">Client MAC address</label>
      <input type="text" name="clientMacAddress" {...formik.getFieldProps('clientMacAddress')} />
      <FormFieldError 
        touched={formik.touched.clientMacAddress}
        errors={formik.errors.clientMacAddress}
      />

      <label htmlFor="clientIpAddress">Client IP address</label>
      <input type="text" name="clientIpAddress" {...formik.getFieldProps('clientIpAddress')} />
      <FormFieldError 
        touched={formik.touched.clientIpAddress}
        errors={formik.errors.clientIpAddress}
      />

      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

LocalNetworkDhcpConfigForm.propTypes = {};

export default LocalNetworkDhcpConfigForm;
