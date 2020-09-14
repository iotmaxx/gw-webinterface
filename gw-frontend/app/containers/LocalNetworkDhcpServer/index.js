/**
 *
 * LocalNetworkDhcpServer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LocalNetworkDhcpConfigForm from 'components/LocalNetworkDhcpConfigForm';
import Feedback from 'components/Feedback';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import saga from './saga';

import LocalDhcpServerReducer from './reducers';

import {
  setDomainName,
  setBeginIpRange,
  setEndIpRange,
  setLeaseTime,
  getDhcpConfig,
} from './actions';
import { dismiss } from '../App/actions';

export function LocalNetworkDhcpServer({
  domainName,
  beginIpRange,
  endIpRange,
  leaseTime,
  success,
  error,
  doSetDomainName,
  doSetBeginIpRange,
  doSetEndIpRange,
  doSetLeaseTime,
  doDismiss,
  doGetDhcpConfig,
}) {
  useEffect(() => {
    doGetDhcpConfig();
  }, []);

  const submit = values => {
    if (values.domainName !== domainName && values.domainName.length > 0)
      doSetDomainName(values.domainName);
    if (values.beginIpRange !== beginIpRange && values.beginIpRange.length > 0)
      doSetBeginIpRange(values.beginIpRange);
    if (values.endIpRange !== endIpRange && values.endIpRange.length > 0)
      doSetEndIpRange(endIpRange);
    if (values.leaseTime !== leaseTime && values.leaseTime > 0)
      doSetLeaseTime(leaseTime);
  };

  return (
    <div>
      <LocalNetworkDhcpConfigForm
        submit={submit}
        domainName={domainName}
        beginIpRange={beginIpRange}
        endIpRange={endIpRange}
        leaseTime={leaseTime}
      />
      <Feedback
        success={success}
        error={error}
        show={success || error}
        callDismiss={doDismiss}
      />
    </div>
  );
}

LocalNetworkDhcpServer.propTypes = {
  domainName: PropTypes.string,
  beginIpRange: PropTypes.string,
  endIpRange: PropTypes.string,
  leaseTime: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  doSetDomainName: PropTypes.func,
  doSetBeginIpRange: PropTypes.func,
  doSetEndIpRange: PropTypes.func,
  doSetLeaseTime: PropTypes.func,
  doDismiss: PropTypes.func,
  doGetDhcpConfig: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    doSetDomainName: domainName => {
      dispatch(setDomainName(domainName));
    },
    doSetBeginIpRange: ipRange => {
      dispatch(setBeginIpRange(ipRange));
    },
    doSetEndIpRange: ipRange => {
      dispatch(setEndIpRange(ipRange));
    },
    doSetLeaseTime: leaseTime => {
      dispatch(setLeaseTime(leaseTime));
    },
    doDismiss: () => {
      dispatch(dismiss());
    },
    doGetDhcpConfig: () => {
      dispatch(getDhcpConfig());
    },
  };
}

const mapStateToProps = state => ({
  domainName: state.LocalNetworkDhcpServer.domainName,
  beginIpRange: state.LocalNetworkDhcpServer.beginIpRange,
  endIpRange: state.LocalNetworkDhcpServer.endIpRange,
  leaseTime: state.LocalNetworkDhcpServer.leaseTime,
  success: state.App.success,
  error: state.App.error,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'LocalNetworkDhcpServer',
  saga,
  mode: DAEMON,
});
const withReducer = injectReducer({
  key: 'LocalNetworkDhcpServer',
  reducer: LocalDhcpServerReducer,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LocalNetworkDhcpServer);
