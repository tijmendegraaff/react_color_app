import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { AUTH_TOKEN } from '../constants/constants';

const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  try {
    jwtDecode(token);
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

export default PrivateRoute;
