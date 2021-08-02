import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/Layout/Layout';
import Cards from './components/Cards/Cards';


import {BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/auth/login" component={Layout}/>
      <Route path="/auth/card" component={Cards}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


