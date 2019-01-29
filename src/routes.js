import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing Page/Landing';
import AccountList from './Pages/AccountList/AccountList';
import Graphs from './Pages/Graphs/Graphs.js';
import HomePage from './Pages/HomePage/HomePage';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/accounts' component={AccountList}/>
    <Route path='/home' component={HomePage}/>
    <Route path='/graphs' component={Graphs} />
  </Switch>
)