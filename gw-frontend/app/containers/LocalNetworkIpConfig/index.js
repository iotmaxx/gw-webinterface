/**
 *
 * LocalNetworkIpConfig
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LocalNetworkIpConfigForm from 'components/LocalNetworkIpConfigForm';

import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

import injectReducer from 'utils/injectReducer';
import LocalNetworkReducer from './reducers';
import {
  setHostname,
  setIpAddress,
  setMTU,
  setSubnetmask
} from './actions';

export function LocalNetworkIpConfig({
  doSetHostname,
  doSetIpAddress,
  doSetMTU,
  doSetSubnetmask,
  mtu,
  hostname,
  ipAddress,
  subnetMask
}) {

  const submit = values => {
    console.log(values);
    doSetHostname();
    doSetIpAddress();
    doSetMTU();
    doSetSubnetmask();
    ToastsStore.success("Success, your changes have been submitted!");
  };

  return (
    <div>
      <LocalNetworkIpConfigForm submit={submit} mtu={mtu} hostname={hostname} ipAddress={ipAddress} subnetMask={subnetMask}/>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
    </div>
  );
}

LocalNetworkIpConfig.propTypes = {
  doSetHostname: PropTypes.func,
  doSetIpAddress: PropTypes.func,
  doSetMTU: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    doSetHostname: (hostname) => {
      dispatch(setHostname(hostname))
    },
    doSetIpAddress: (ipAddress, subnetMask) => {
      dispatch(setIpAddress(ipAddress, subnetMask))
    },
    doSetMTU: (mtu) => {
      dispatch(setMTU(mtu))
    },
    doSetSubnetmask: (subnetMask) => {
      dispatch(setSubnetmask(subnetMask))
    }
  };
}

const mapStateToProps = state => {
  return {
    hostname: state.LocalNetworkIpConfig.hostname,
    mtu: state.LocalNetworkIpConfig.mtu,
    ipAddress: state.LocalNetworkIpConfig.ipAddress,
    subnetMask: state.LocalNetworkIpConfig.subnetMask
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'LocalNetworkIpConfig', saga, mode: DAEMON });

const withReducer = injectReducer({ key: 'LocalNetworkIpConfig', reducer: LocalNetworkReducer });

export default compose(withReducer, withSaga, withConnect)(LocalNetworkIpConfig);
