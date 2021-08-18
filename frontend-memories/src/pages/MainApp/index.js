import React from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { Button } from '../../components'
import { HomeImage } from '../../assets';
import { Header, Footer } from '../../components';
import "../../components/atoms/FontAwesom"
import  Create  from '../Create';
import  Details  from '../Details';
import Home from '../Home';
import './mainApp.scss';

function MainApp() {
    const history = useHistory();
    return (
        <div className="main-app-wrapper small-scroll">
            <div className="header-wrapper">
            <Header />
            </div>
            <section className="home" id="home">
                <div className="content">
                    <h3>Memories <span>Website Application</span></h3>
                    <p>With this application you can make your notes here now. It's easy, simple, fast and safe. I hope you enjoy with this application</p>
                <Button onClick={() => history.push('./create')} title="Create Now"/>
                </div>
                <div className="image-home">
                <img src={HomeImage} alt="Application"/>
            </div>
            </section>
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
