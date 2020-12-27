import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? <Component/> : <Redirect to='/login'></Redirect>;
      }}
    ></Route>
  );
}
