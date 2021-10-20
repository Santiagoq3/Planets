import React, { useState } from 'react'

import "./planetsoptions.css"
export const PlanetsOptions = ({planets}) => {

    const [planet] = planets

    console.log(planet)

    const [optionState, setoptionState] = useState("overview")


    const handleOption = (option)=>{
        setoptionState(option)
    }

    
    return (
        <div>
            <div className="planetsoptions">
                
                <ul>
                    <li onClick={()=>{
                        handleOption("overview")
                    }}>Overwiew</li>
                    <li onClick={()=>{
                        handleOption("structure")
                    }}>Structure</li>
                    <li onClick={()=>{
                        handleOption("geology")
                    }}>Geology</li>
                </ul>
            </div>
            <main className="planetsoptions__main">
                
                { optionState === "overview" && 
                     <img className="img_planets" src={planet.images.overview}>
                     </img>
                }
                { optionState === "structure" && 
                     <img className="img_planets" src={planet.images.structure}>
                     </img>
                }
                { optionState === "geology" && 
                     <img className="img_planets" src={planet.images.geology}>
                     </img>
                }
                

                <h2>{planet.name}</h2>

                {
                        optionState === "overview" &&
                        <p>{planet.info.overview}</p>
                }
                {
                        optionState === "structure" &&
                        <p>{planet.info.structure}</p>
                }
                {
                        optionState === "geology" &&
                        <p>{planet.info.geology}</p>
                }
                

                <span className="span">Source:  <a href={planet.source}>Wikipedia</a></span>

                <section>
                    <ul>
                        <li>
                            Rotation Time: <strong>{planet.rotationTime}</strong>
                        </li>
                        <li>
                            Revolution Time: <strong>{planet.revolutionTime}</strong>
                        </li>
                        <li>
                            Radius: <strong>{planet.radius}</strong>
                        </li>
                        <li>
                            Average Temp: <strong>{planet.averageTemp}</strong>
                        </li>
                    </ul>
                </section>

            </main>
            
        </div>
    )
}
