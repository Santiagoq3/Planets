import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const MarsScreen = () => {
    const planets = getPlanetsByName("Mars");
    console.log(planets)
    return (
        <div>
            <PlanetsOptions planets={planets} />
        </div>
    )
}
