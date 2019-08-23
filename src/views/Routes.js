import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from '../container/Login';
import Dashboard  from '../container/Dasboard/index'

const history = createBrowserHistory()

const Routes = () => 
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
    </Router>

export default Routes