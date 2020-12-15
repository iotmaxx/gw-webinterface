/**
 *
 * SettingsView
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import ResetPasswordForm from 'components/ResetPasswordForm';
import Feedback from 'components/Feedback';

import { dismiss } from '../App/actions';

import saga from './saga';
import SettingsViewReducer from './reducers';
import { getUser, setCredentials, updateUsername } from './actions';
// import messages from './messages';
// import { FormattedMessage } from 'react-intl';

function SettingsView({
  user,
  doSetCredentials,
  doUpdateUsername,
  doGetUser,
  error,
  success,
  doDismiss,
}) {
  const [password, updatePassword] = useState('');

  useEffect(() => {
    doGetUser();
    updatePassword('');
  }, []);

  const submit = values => {
    doSetCredentials(values.username, values.password);
  };

  return (
    <div>
      <ResetPasswordForm
        submit={submit}
        username={user}
        password={password}
        setPassword={updatePassword}
        setUsername={doUpdateUsername}
      />
      ;
      <Feedback
        success={success}
        error={error}
        callDismiss={doDismiss}
        show={success || error}
      />
    </div>
  );
}

SettingsView.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  doSetCredentials: PropTypes.func,
  doGetUser: PropTypes.func,
  user: PropTypes.string,
  doDismiss: PropTypes.func,
  doUpdateUsername: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    doSetCredentials: (username, password) => {
      dispatch(setCredentials(username, password));
    },
    doGetUser: () => {
      dispatch(getUser());
    },
    doDismiss: () => {
      dispatch(dismiss());
    },
    doUpdateUsername: username => {
      dispatch(updateUsername(username));
    },
  };
}

const mapStateToProps = state => ({
  user: state.SettingsView.user,
  error: state.App.error,
  success: state.App.success,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'SettingsView',
  saga,
  mode: DAEMON,
});

const withReducer = injectReducer({
  key: 'SettingsView',
  reducer: SettingsViewReducer,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SettingsView);
