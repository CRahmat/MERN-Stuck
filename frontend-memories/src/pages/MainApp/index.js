import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from '../../components';
import  Create  from '../Create';
import  Details  from '../Details';
import Home from '../Home';
import './mainApp.scss';

function MainApp() {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
            <Header />
            </div>
            <div className="content-wrapper">
            <Router className="main">
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
            </div>
            <div className="footer-wrapper">
            <Footer />
            </div>
        </div>
    )
}

export default MainApp
