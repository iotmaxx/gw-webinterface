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

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { login } from './actions';

import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import { withRouter } from "react-router-dom";

import injectReducer from 'utils/injectReducer';
import LoginReducer from './reducers';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

export function LoginView({
  doLogin
}) {

  const submit = values => {
    if (values.name.length !== 0 || values.password.length !== 0) {
      doLogin(values.name, values.password);
    } else {
      ToastsStore.error("Sorry, you profived empty credentials")
    }
  }

  return (
    <div>
      <LoginForm submit={submit} />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
    </div>
  );
}

LoginView.propTypes = {
  doLogin: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (username, password) => {
      dispatch(login(username, password))
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'LoginView', reducer: LoginReducer });
const withSaga = injectSaga({ key: 'LoginView', saga, mode: DAEMON });

export default compose(withReducer, withSaga, withConnect)(withRouter(LoginView));
