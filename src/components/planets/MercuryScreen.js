import React from 'react'
import { getPlanetsByName } from '../../helpers/getPlanetsByName';
import { PlanetsOptions } from '../ui/PlanetsOptions'

export const MercuryScreen = () => {
    const planets = getPlanetsByName("Mercury");
    console.log(planets)
    return (
        <div>
           <PlanetsOptions planets={planets} />
        </div>
    )
}
