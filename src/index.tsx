import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import Login from './components/Login/Login';

import {BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/auth/login" component={Login}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


