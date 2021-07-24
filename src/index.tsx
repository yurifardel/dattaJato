import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import {BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/auth/login" component={Login}/>
      <Route path="/auth/register" exact component={Register}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


