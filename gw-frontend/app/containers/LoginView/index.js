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

import { ACCESS_TOKEN, ROUTES } from 'containers/App/constants';

import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import { withRouter } from "react-router-dom";

export function LoginView(props) {

  const submit = values => {
    console.log(values)
    if (values.name === "admin" && values.password === "admin") {
      localStorage.setItem(ACCESS_TOKEN, ACCESS_TOKEN);
      props.history.push(ROUTES.dashboard);
    } else {
      ToastsStore.error("Sorry, wrong credentials")
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
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(LoginView));
