import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login, Error, ProtectedRoute, SignUp } from "./auth";
import { MainPage, ProductPage, Cart } from "./Pages";
import { Header, Footer } from "./components";

const Routing = () => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const isVerifying = useSelector((state) => state.Auth.isVerifying);

  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={MainPage}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      {/* <Route exact path="/dashboard" component={MainPage} /> */}
      <Route exact path="/product/:id" component={ProductPage} />
      <Route exact path="/cart" component={Cart} />
      <Route component={Error} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;

{
  /* <Route exact path="/" component={MainPage} /> */
}
{
  /* <Route exact path="/login" component={Login} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={Cart} /> */
}
