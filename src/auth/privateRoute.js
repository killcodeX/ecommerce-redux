import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const log = useSelector((state) => state.Auth.loggedIn);
  return (
    <Route
      {...rest}
      render={(props) => {
        log ? <Component {...props} /> : <Redirect to='/sign-in' />;
      }}
    />
  );
}
