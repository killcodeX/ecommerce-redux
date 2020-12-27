import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Login, Error, PrivateRoute, LoginPage } from "./auth";
import { MainPage, ProductPage, Cart } from "./Pages";
import { Header, Footer, Spinner } from "./components";
import { useAuth0 } from "@auth0/auth0-react";

const Routing = () => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

    useEffect(() => {
      if(isAuthenticated){
        history.push('/product')
      } else{
        history.push('/login')
      }
    }, [])

  return (
    <Switch>
      {/* <PrivateRoute path="/" exact={true}>
        <MainPage />
      </PrivateRoute> */}
      <Route exact path='/product' component={MainPage} />
      <Route exact path="/product/:id" component={ProductPage} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={LoginPage} />
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

