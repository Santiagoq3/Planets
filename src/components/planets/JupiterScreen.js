import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const JupiterScreen = () => {
    const planets = getPlanetsByName("Jupiter");
    console.log(planets)
    return (
        <div>
            <PlanetsOptions planets={planets} />
        </div>
    )
}
