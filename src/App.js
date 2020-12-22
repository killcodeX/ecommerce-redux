import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Error } from "./auth";
import { MainPage, ProductPage } from "./Pages";
import {Header, Footer} from './components';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login} />
        <Route path="/product" component={ProductPage}/>
        <Route path="*" component={Error}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
