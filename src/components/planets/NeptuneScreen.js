import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const NeptuneScreen = () => {
    const planets = getPlanetsByName("Neptune");
    console.log(planets)
    return (
        <div>
           <PlanetsOptions planets={planets} />
        </div>
    )
}
