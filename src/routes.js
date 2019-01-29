import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Graphs from './Pages/Graphs/Graphs.js'

export default(
    <Switch>
        <Route path='/graphs' component={Graphs} />
    </Switch>
)