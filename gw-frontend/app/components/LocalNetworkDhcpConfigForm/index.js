/**
 *
 * LocalNetworkDhcpConfigForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormWrapper = styled.form`
  display: grid;
`;

function LocalNetworkDhcpConfigForm() {
  const schema = Yup.object({
    domainName: Yup.string()
      .required('Required'),
    leaseTime: Yup.string()
      .required('Required'),
    beginIpRange: Yup.string()
      .matches(/(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, 'Not a valid IPv4 address'),
    endIpRange: Yup.string()
      .matches(/(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, 'Not a valid IPv4 address'),
    clientMacAddress: Yup.string(),
    clientIpAddress: Yup.string()
      .matches(/(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, 'Not a valid IPv4 address'),
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
      {formik.touched.domainName && formik.errors.domainName ? (
          <div>{formik.errors.domainName}</div>
        ) : null
      }

      <label htmlFor="leaseTime">Lease Time</label>
      <input type="text" name="leaseTime" {...formik.getFieldProps('leaseTime')} />
      {formik.touched.leaseTime && formik.errors.leaseTime ? (
          <div>{formik.errors.leaseTime}</div>
        ) : null
      }

      <label htmlFor="beginIpRange">Begin IP Range</label>
      <input type="text" name="beginIpRange" {...formik.getFieldProps('beginIpRange')} />
      {formik.touched.beginIpRange && formik.errors.beginIpRange ? (
          <div>{formik.errors.beginIpRange}</div>
        ) : null
      }

      <label htmlFor="endIpRange">End IP Range</label>
      <input type="text" name="endIpRange" {...formik.getFieldProps('endIpRange')} />
      {formik.touched.endIpRange && formik.errors.endIpRange ? (
          <div>{formik.errors.endIpRange}</div>
        ) : null
      }

      <label htmlFor="clientMacAddress">Client MAC address</label>
      <input type="text" name="clientMacAddress" {...formik.getFieldProps('clientMacAddress')} />
      {formik.touched.clientMacAddress && formik.errors.clientMacAddress ? (
          <div>{formik.errors.clientMacAddress}</div>
        ) : null
      }

      <label htmlFor="clientIpAddress">Client IP address</label>
      <input type="text" name="clientIpAddress" {...formik.getFieldProps('clientIpAddress')} />
      {formik.touched.clientIpAddress && formik.errors.clientIpAddress ? (
          <div>{formik.errors.clientIpAddress}</div>
        ) : null
      }

      <button type="submit">Apply</button>
    </FormWrapper>
  );
}

LocalNetworkDhcpConfigForm.propTypes = {};

export default LocalNetworkDhcpConfigForm;
