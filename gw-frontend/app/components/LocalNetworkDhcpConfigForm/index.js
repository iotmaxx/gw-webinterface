/**
 *
 * LocalNetworkDhcpConfigForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import {
  YUP_VALIDATORS,
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

function LocalNetworkDhcpConfigForm({
  submit,
  domainName,
  leaseTime,
  beginIpRange,
  endIpRange,
}) {
  const schema = Yup.object({
    domainName: Yup.string().required('Required'),
    leaseTime: Yup.string().required('Required'),
    beginIpRange: Yup.string().required('Required'),
    endIpRange: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      domainName,
      leaseTime,
      beginIpRange,
      endIpRange,
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
    enableReinitialize: true,
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <TableTitle>DHCP Server</TableTitle>
      <table>
        <tbody>
          <LightTableRow>
            <LabelCell>
              <Label text="Domain Name" labelFor="domainName" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="domainName"
                placeholder="your-domain.org"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.domainName}
                errors={formik.errors.domainName}
              />
            </InputCell>
          </LightTableRow>
          <DarkTableRow>
            <LabelCell>
              <Label text="Lease Time" labelFor="leaseTime" />
            </LabelCell>
            <InputCell>
              <Input
                type="number"
                name="leaseTime"
                placeholder="7200"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.leaseTime}
                errors={formik.errors.leaseTime}
              />
            </InputCell>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Begin IP Range" labelFor="beginIpRange" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="beginIpRange"
                placeholder="20"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.beginIpRange}
                errors={formik.errors.beginIpRange}
              />
            </InputCell>
          </LightTableRow>
          <DarkTableRow>
            <LabelCell>
              <Label text="IP Pool Size" labelFor="endIpRange" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="endIpRange"
                placeholder="253"
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.endIpRange}
                errors={formik.errors.endIpRange}
              />
            </InputCell>
          </DarkTableRow>
        </tbody>
      </table>
      <CenterButton type="submit">Apply</CenterButton>
    </FormWrapper>
  );
}

LocalNetworkDhcpConfigForm.propTypes = {
  submit: PropTypes.func,
  domainName: PropTypes.string,
  leaseTime: PropTypes.string,
  beginIpRange: PropTypes.string,
  endIpRange: PropTypes.string,
};

export default LocalNetworkDhcpConfigForm;
