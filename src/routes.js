import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing Page/Landing';
import AccountList from './Pages/AccountList/AccountList';
import Graphs from './Pages/Graphs/Graphs.js';
import HomePage from './Pages/HomePage/HomePage';
import Calculator from './Pages/Calculator/Calculator';
import Savings from './Pages/Savings/Savings.js';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/accounts' component={AccountList}/>
    <Route path='/home' component={HomePage}/>
    <Route path='/graphs' component={Graphs} />
    <Route path='/calculator' component={Calculator} />
    <Route path='/plans' component={Savings} />
  </Switch>
)