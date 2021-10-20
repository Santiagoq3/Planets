import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const UranusScreen = () => {
    const planets = getPlanetsByName("Uranus");
    console.log(planets)
    return (
        <div>
            <PlanetsOptions planets={planets}/>
        </div>
    )
}
