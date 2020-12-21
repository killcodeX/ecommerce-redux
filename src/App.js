import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Error } from "./auth";
import { MainPage } from "./Pages";
import {Header} from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Header/>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login} />
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
