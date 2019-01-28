import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './Pages/Landing Page/Landing'

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
  </Switch>
)