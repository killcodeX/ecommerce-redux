import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, PrivateRoute, Error } from "./auth";
import { MainPage } from "./Pages";
import {Header} from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Header/>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
