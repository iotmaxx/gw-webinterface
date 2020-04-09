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

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { login, dismiss } from '../App/actions';

import { withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

export function LoginView({ doLogin, success, error, doDismiss }) {
  const submit = values => {
    if (values.name.length !== 0 || values.password.length !== 0) {
      doLogin(values.name, values.password);
    }
  };

  return (
    <div>
      <LoginForm submit={submit} />
      <Feedback
        success={success}
        error={error}
        callDismiss={doDismiss}
        show={success || error}
        msg={error ? 'Sorry, you profived empty credentials' : null}
      />
    </div>
  );
}

LoginView.propTypes = {
  doLogin: PropTypes.func,
  dismiss: PropTypes.func,
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

const mapStateToProps = state => {
  return {
    error: state.App.error,
    success: state.App.success,
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'LoginView', saga, mode: DAEMON });

export default compose(
  withSaga,
  withConnect,
)(withRouter(LoginView));
