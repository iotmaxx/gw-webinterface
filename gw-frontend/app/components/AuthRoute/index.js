/**
 *
 * AuthRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ACCESS_TOKEN } from '../../containers/App/constants';

const AuthRoute = ({ component: Component, ...rest }) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  return (
    <Route
      {...rest}
      render={props =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.elementType,
};

export default AuthRoute;
