import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import LandingPage from './pages/Landing'
import MainForm from './pages/MainForm'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/curriculum" component={MainForm} />
            </Switch>
        </BrowserRouter>
    )
}