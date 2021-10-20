import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { EarthScreen } from '../components/planets/EarthScreen';
import { JupiterScreen } from '../components/planets/JupiterScreen';
import { MarsScreen } from '../components/planets/MarsScreen';
import { MercuryScreen } from '../components/planets/MercuryScreen';
import { NeptuneScreen } from '../components/planets/NeptuneScreen';
import { SaturnScreen } from '../components/planets/SaturnScreen';
import { UranusScreen } from '../components/planets/UranusScreen';
import { Venus } from '../components/planets/Venus';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>

            <Navbar />


            <Switch>
                <Route exact path="/mercury" component={MercuryScreen} />
                <Route exact path="/venus" component={Venus} />
                <Route exact path="/earth" component={EarthScreen} />
                <Route exact path="/mars" component={MarsScreen} />
                <Route exact path="/jupiter" component={JupiterScreen} />
                <Route exact path="/saturn" component={SaturnScreen} />
                <Route exact path="/uranus" component={UranusScreen} />
                <Route exact path="/neptune" component={NeptuneScreen} />

                <Redirect to="/earth" />
            </Switch>
        </Router>
    )
}
