/**
 *
 * LocalNetworkDhcpServer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LocalNetworkDhcpConfigForm from 'components/LocalNetworkDhcpConfigForm';

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

import injectReducer from 'utils/injectReducer';
import LocalDhcpServerReducer from './reducers';

import {
  setDomainName,
  setBeginIpRange,
  setEndIpRange,
  setLeaseTime,
} from './actions';

export function LocalNetworkDhcpServer({
  domainName,
  beginIpRange,
  endIpRange,
  leaseTime,
  doSetDomainName,
  doSetBeginIpRange,
  doSetEndIpRange,
  doSetLeaseTime,
}) {
  const submit = values => {
    if (values.domainName !== domainName) doSetDomainName(values.domainName);
    if (values.beginIpRange !== beginIpRange)
      doSetBeginIpRange(values.beginIpRange);
    if (values.endIpRange !== endIpRange) doSetEndIpRange(endIpRange);
    if (values.leaseTime !== leaseTime) doSetLeaseTime(leaseTime);
    ToastsStore.success('Success, your changes have been submitted!');
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
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.BOTTOM_RIGHT}
      />
    </div>
  );
}

LocalNetworkDhcpServer.propTypes = {
  domainName: PropTypes.string,
  beginIpRange: PropTypes.string,
  endIpRange: PropTypes.string,
  leaseTime: PropTypes.string,
  doSetDomainName: PropTypes.func,
  doSetBeginIpRange: PropTypes.func,
  doSetEndIpRange: PropTypes.func,
  doSetLeaseTime: PropTypes.func,
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
  };
}

const mapStateToProps = state => {
  return {
    domainName: state.LocalNetworkDhcpServer.domainName,
    beginIpRange: state.LocalNetworkDhcpServer.beginIpRange,
    endIpRange: state.LocalNetworkDhcpServer.endIpRange,
    leaseTime: state.LocalNetworkDhcpServer.leaseTime,
  };
};

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
