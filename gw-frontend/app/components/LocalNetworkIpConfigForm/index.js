/**
 *
 * LocalNetworkIpConfigForm
 *
 */

import React, { useState } from 'react';
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
  Select,
  CenterButton,
  FormWrapper,
  TableHead,
  TableTitle,
} from 'containers/App/constants';

import Label from '../Label';
import Input from '../FormikInput';

// TODO: Add alias address form
function LocalNetworkIpConfigForm({
  submit,
  mtu,
  hostname,
  ipAddress,
  subnetMask,
}) {
  const [enableIPv6, setEnableIPv6] = useState(true);

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
      ipAddress,
      subnetMask,
      mtu,
      addressType: 'static',
      ipAddressV6: '',
      hostname,
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
    enableReinitialize: true,
  });
  const toggleSelect = event => {
    const { value } = event.target[event.target.selectedIndex];
    if (value === 'y') setEnableIPv6(true);
    if (value === 'n') setEnableIPv6(false);
  };

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <TableTitle>IP Configuration</TableTitle>
      <table>
        <tbody>
          <DarkTableRow>
            <TableHead colSpan={2}>
              <p>Current address</p>
            </TableHead>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Hostname" labelFor="hostname" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="hostname"
                placeholder="localhost"
                value={formik.values.hostname}
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.hostname}
                errors={formik.errors.hostname}
              />
            </InputCell>
          </LightTableRow>
          <DarkTableRow>
            <LabelCell>
              <Label text="IP Address" labelFor="ipAddress" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="ipAddress"
                placeholder="127.0.0.1"
                value={formik.values.ipAddress}
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.ipAddress}
                errors={formik.errors.ipAddress}
              />
            </InputCell>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Subnet Mask" labelFor="subnetMask" />
            </LabelCell>
            <InputCell>
              <Input
                type="text"
                name="subnetMask"
                placeholder="255.255.255.0"
                value={formik.values.subnetMask}
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.subnetMask}
                errors={formik.errors.subnetMask}
              />
            </InputCell>
          </LightTableRow>
          <DarkTableRow>
            <LabelCell>
              <Label text="MTU" labelFor="mtu" />
            </LabelCell>
            <InputCell>
              <Input
                type="number"
                name="mtu"
                placeholder="1500"
                value={formik.values.mtu}
                formik={formik}
              />
              <FormFieldError
                touched={formik.touched.mtu}
                errors={formik.errors.mtu}
              />
            </InputCell>
          </DarkTableRow>
          <LightTableRow>
            <LabelCell>
              <Label text="Enable IPv6" labelFor="enableIPv6" />
            </LabelCell>
            <InputCell>
              <Select name="enableIPv6" id="enableIPv6" onChange={toggleSelect}>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </Select>
            </InputCell>
          </LightTableRow>
          {enableIPv6 ? (
            <DarkTableRow>
              <LabelCell>
                <Label text="IPv6 static address" labelFor="ipAddressV6" />
              </LabelCell>
              <InputCell>
                <Input
                  type="text"
                  name="ipAddressV6"
                  placeholder="00:00:00:00:00:00"
                  value={formik.values.ipAddressV6}
                  formik={formik}
                />
                <FormFieldError
                  touched={formik.touched.ipAddressV6}
                  errors={formik.errors.ipAddressV6}
                />
              </InputCell>
            </DarkTableRow>
          ) : null}
        </tbody>
      </table>
      <CenterButton type="submit">Apply</CenterButton>
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
