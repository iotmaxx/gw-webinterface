/**
 *
 * LocalNetworkDhcpConfigForm
 *
 */

 import React, { useState } from 'react';
 import styled from 'styled-components';
 import PropTypes from 'prop-types';
 

import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import FormFieldError from 'components/FormFieldError';

import {
  YUP_VALIDATORS,
  LightTableRow,
  DarkTableRow,
  InputCell,
  Select,
  LabelCell,
  CenterButton,
  FormWrapper,
  TableTitle,
} from 'containers/App/constants';

import Label from '../Label';
import Input from '../FormikInput';
import { Field } from 'formik';


const CheckboxWrapper = styled.input`
  margin-left: 10px;
  height: 20px;
  width: 20px;
  vertical-align: text-bottom;
`;




function LocalNetworkDhcpConfigForm({
  submit,
  domainName,
  leaseTime,
  beginIpRange,
  endIpRange,
  enableDHCPServer,   
}) {
  const schema = Yup.object({
    domainName: Yup.string().required('Required'),
    leaseTime: Yup.string().required('Required'),
    beginIpRange: Yup.string().required('Required'),
    endIpRange: Yup.string().required('Required'),
    enableDHCPServer: Yup.boolean(),    
    });

  const formik = useFormik({
    initialValues: {
      domainName,
      leaseTime,
      beginIpRange,
      endIpRange,
      enableDHCPServer,
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: schema,
    enableReinitialize: true,
  });

  const [DHCPServer, eDHCPServer] = useState(true);

  const toggleSelect = event => {
    //enableDHCPServer = event.target.checked
    eDHCPServer(event.target.checked);    
   // if (value === true) eDHCPServer(true);
   // if (value === false) eDHCPServer(false);
  };

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
          <LightTableRow>
          <LabelCell>
              <Label text="Enable DHCP" labelFor="enableDHCPServer" />
            </LabelCell>
            <InputCell>
            <FormikProvider>
              <Input
                type="checkbox"
                name="enableDHCPServer"
                checked={formik.values.enableDHCPServer}                  
                //onPress={() => setFieldValue("enableDHCPServer", DHCPServer)}                                             
                formik={formik}
              />    
              </FormikProvider>        
            </InputCell>          
          </LightTableRow>
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
  enableDHCPServer: PropTypes.bool,
};

export default LocalNetworkDhcpConfigForm;
