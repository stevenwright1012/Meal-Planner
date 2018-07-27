import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './components/Search';
import Login from './components/Login';

export default(
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dash' component={Search}/>
    </Switch>
)