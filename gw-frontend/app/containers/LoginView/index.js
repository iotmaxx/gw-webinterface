/**
 *
 * LoginView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginForm from 'components/LoginForm';
import Feedback from 'components/Feedback';

import { withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import styled from 'styled-components';
import { login, dismiss } from '../App/actions';
import saga from './saga';

const Centered = styled.div`
  align-self: center;
`;

export function LoginView({ doLogin, success, error, doDismiss }) {
  const submit = values => {
    if (values.name.length !== 0 || values.password.length !== 0) {
      doLogin(values.name, values.password);
    }
  };

  return (
    <Centered>
      <LoginForm submit={submit} />
      <Feedback
        success={success}
        error={error}
        callDismiss={doDismiss}
        show={success || error}
        msg={error ? 'Sorry, you profived empty credentials' : null}
      />
    </Centered>
  );
}

LoginView.propTypes = {
  doLogin: PropTypes.func,
  doDismiss: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (username, password) => {
      dispatch(login(username, password));
    },
    doDismiss: () => {
      dispatch(dismiss());
    },
  };
}

const mapStateToProps = state => ({
  error: state.App.error,
  success: state.App.success,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'LoginView', saga, mode: DAEMON });

export default compose(
  withSaga,
  withConnect,
)(withRouter(LoginView));
