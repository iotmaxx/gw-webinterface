/**
 *
 * LocalNetworkIpConfig
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LocalNetworkIpConfigForm from 'components/LocalNetworkIpConfigForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import Feedback from 'components/Feedback';

import { ROUTES, port } from '../App/constants';
import { dismiss } from '../App/actions';

import saga from './saga';
import LocalNetworkReducer from './reducers';
import { setHostname, setAddress, setMTU, getAddress } from './actions';

export function LocalNetworkIpConfig({
  doSetHostname,
  doSetAddress,
  doSetMTU,
  doDismiss,
  doGetAddress,
  mtu,
  hostname,
  ipAddress,
  subnetMask,
  error,
  success,
}) {
  useEffect(() => {
    doGetAddress();
  }, []);

  const submit = values => {
    if (values.hostname !== hostname) doSetHostname(values.hostname);
    if (values.ipAddress !== ipAddress || values.subnetMask !== subnetMask)
      doSetAddress(values.ipAddress, values.subnetMask, ipAddress);
    if (values.mtu !== mtu) doSetMTU(mtu);
  };

  const reload = () => {
    setTimeout(() => {
      window.location.replace(
        `http://${ipAddress}:${port}/${ROUTES.localNetwork.ipConfig}`,
      );
    }, 1000);
  };

  return (
    <div>
      <LocalNetworkIpConfigForm
        submit={submit}
        mtu={mtu}
        hostname={hostname}
        ipAddress={ipAddress}
        subnetMask={subnetMask}
      />
      <Feedback
        success={success}
        error={error}
        callDismiss={doDismiss}
        show={success || error}
        callback={reload}
      />
    </div>
  );
}

LocalNetworkIpConfig.propTypes = {
  doSetHostname: PropTypes.func,
  doSetAddress: PropTypes.func,
  doSetMTU: PropTypes.func,
  doGetAddress: PropTypes.func,
  dismiss: PropTypes.func,
  mtu: PropTypes.number,
  hostname: PropTypes.string,
  ipAddress: PropTypes.string,
  subnetMask: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    doSetHostname: hostname => {
      dispatch(setHostname(hostname));
    },
    doSetAddress: (ipAddress, subnetMask, oldAddress) => {
      dispatch(setAddress(ipAddress, subnetMask, oldAddress));
    },
    doSetMTU: mtu => {
      dispatch(setMTU(mtu));
    },
    doGetAddress: () => {
      dispatch(getAddress());
    },
    doDismiss: () => {
      dispatch(dismiss());
    },
  };
}

const mapStateToProps = state => {
  return {
    hostname: state.LocalNetworkIpConfig.hostname,
    mtu: state.LocalNetworkIpConfig.mtu,
    ipAddress: state.LocalNetworkIpConfig.ipAddress,
    subnetMask: state.LocalNetworkIpConfig.subnetMask,
    error: state.App.error,
    success: state.App.success,
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'LocalNetworkIpConfig',
  saga,
  mode: DAEMON,
});
const withReducer = injectReducer({
  key: 'LocalNetworkIpConfig',
  reducer: LocalNetworkReducer,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LocalNetworkIpConfig);
