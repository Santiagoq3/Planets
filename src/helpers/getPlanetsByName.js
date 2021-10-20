import { planets } from "../data/planets"

export const getPlanetsByName = (name ="") => {

    return  planets.filter(planet => planet.name.includes(name))
    
}



