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

import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

import injectReducer from 'utils/injectReducer';
import LocalDhcpServerReducer from './reducers';

import { setSomething } from './actions';

export function LocalNetworkDhcpServer({
  doSetSomething,
  someting
}) {
  const submit = values => {
    doSetSomething();
    ToastsStore.success("Success, your changes have been submitted!");
  }
  
  return (
    <div>
      <LocalNetworkDhcpConfigForm submit={submit} />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
    </div>
  );
}

LocalNetworkDhcpServer.propTypes = {
  someting: PropTypes.string,
  doSetSomething: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    doSetSomething: (someting) => {
      dispatch(setSomething(someting));
    },
  };
}

const mapStateToProps = state => {
  return {
    someting: state.LocalNetworkDhcpServer.someting
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'LocalNetworkDhcpServer', saga, mode: DAEMON });
const withReducer = injectReducer({ key: 'LocalNetworkDhcpServer', reducer: LocalDhcpServerReducer });

export default compose(withReducer, withSaga, withConnect)(LocalNetworkDhcpServer);
