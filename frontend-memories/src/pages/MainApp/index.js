import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Create  from '../Create';
import  Details  from '../Details';
import Home from '../Home';

function MainApp() {
    return (
        <Router>
            <Switch>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/details">
                    <Details />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default MainApp
