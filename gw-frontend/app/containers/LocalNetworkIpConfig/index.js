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

import {
  setHostname,
  setIpAddress,
  setMTU
} from './actions';

export function LocalNetworkIpConfig({
  doSetHostname,
  doSetIpAddress,
  doSetMTU
}) {

  const submit = values => {
    console.log(values);
    ToastsStore.success("Success, your changes have been submitted!");
  };

  return (
    <div>
      <LocalNetworkIpConfigForm submit={submit} />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
    </div>
  );
}

LocalNetworkIpConfig.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
    }
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'LocalNetworkIpConfig', saga, mode: DAEMON });

export default compose(withSaga, withConnect)(LocalNetworkIpConfig);
