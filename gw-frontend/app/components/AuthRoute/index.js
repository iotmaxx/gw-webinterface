/**
 *
 * AuthRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, loggedIn: loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
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
