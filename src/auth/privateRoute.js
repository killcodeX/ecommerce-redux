import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function privateRoute({ component: Component, ...rest }) {
  console.log('children', Component)
  console.log('rest', rest)
  const isLogin = true;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? <Component {...props}/> : <Redirect to='/login'/>
      }}
    ></Route>
  );
}
