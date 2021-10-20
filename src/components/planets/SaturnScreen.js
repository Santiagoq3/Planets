import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const SaturnScreen = () => {
    const planets = getPlanetsByName("Saturn");
    console.log(planets)
    return (
        <div>
            <PlanetsOptions planets={planets} />
        </div>
    )
}
