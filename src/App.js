import React,{useEffect} from "react";
import { Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login, Error, PrivateRoute } from "./auth";
import { MainPage, ProductPage, Cart } from "./Pages";
import { Header, Footer } from "./components";


const Routing = () => {
  const history = useHistory();
  const loggedIn = useSelector((state) => state.Auth.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      history.push("/dashboard");
    } else{
      history.push("/sign-in");
    }
  }, [loggedIn]);
  return (
    <Switch>
      {/* <Redirect exact from="/" to={loggedIn ? '/dashboard' : '/sign-in'} /> */}
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/dashboard" component={MainPage} />
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
