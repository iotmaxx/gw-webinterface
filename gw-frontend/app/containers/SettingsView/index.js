/**
 *
 * SettingsView
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes, { func } from 'prop-types';
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
import { getSettings, setPassword } from './actions';
// import messages from './messages';
// import { FormattedMessage } from 'react-intl';

function SettingsView({
  user,
  doSetPassword,
  doGetSettings,
  error,
  success,
  doDismiss,
}) {
  const [password, updatePassword] = useState('');

  useEffect(() => {
    doGetSettings();
    updatePassword('');
  }, []);

  return (
    <div>
      <ResetPasswordForm
        submit={doSetPassword}
        user={user}
        password={password}
        setPassword={updatePassword}
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
  doSetPassword: PropTypes.func,
  doGetSettings: PropTypes.func,
  user: PropTypes.string,
  doDismiss: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    doSetPassword: password => {
      dispatch(setPassword(password));
    },
    doGetSettings: () => {
      dispatch(getSettings());
    },
    doDismiss: () => {
      dispatch(dismiss());
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
