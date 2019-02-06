import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing Page/Landing';
import AccountList from './Pages/AccountList/AccountList';
import Graphs from './Pages/Graphs/Graphs.js';
import HomePage from './Pages/HomePage/HomePage';
<<<<<<< HEAD
=======
import Calculator from './Pages/Calculator/Calculator';
import Plans from './Pages/Plans/Plans'
>>>>>>> ad0c11b6e8e38f528592a2781f04af28189f256b
import Savings from './Pages/Savings/Savings.js';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/accounts' component={AccountList}/>
    <Route path='/home' component={HomePage}/>
    <Route path='/graphs' component={Graphs} />
    <Route path='/calculator' component={Calculator} />
    <Route path='/goals' component={Plans}/>
    <Route path='/plans' component={Savings} />
  </Switch>
)