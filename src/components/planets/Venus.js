import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const Venus = () => {

    const planets = getPlanetsByName("Venus");


    console.log(planets)
    return (
        <div>
            <PlanetsOptions planets={planets} />
        </div>
    )
}
