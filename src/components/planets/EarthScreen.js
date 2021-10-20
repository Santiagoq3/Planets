import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const EarthScreen = () => {

    const planets = getPlanetsByName("Earth");
    console.log(planets)
    return (
        <div>
            <PlanetsOptions planets={planets} />
        </div>
    )
}
