import React, { useState } from 'react'
import "./navbar.css"
import { NavbarOption } from './NavbarOption'

export const Navbar = () => {

    const [navState, setnavState] = useState(false);


    const handleNav = (state)=>{
        setnavState(!state)
    }

    return (
        <header>
            <div>

                <h1>The planets</h1>
                <img onClick={()=>{
                    handleNav(navState)
                }} src={"./assets/images/icon-hamburger.svg"}></img>
               

            </div>
            {
                navState && <nav className="">
                <ul>
                    <NavbarOption title="Mercury" color="#a8b9c5" />
                    <NavbarOption title="Venus" color="#bb9b67" />
                    <NavbarOption title="Earth" color="#3f44c7" />
                    <NavbarOption title="Mars" color="#c1533e" />
                    <NavbarOption title="Jupiter" color="#b38363" />
                    <NavbarOption title="Saturn" color="#bf9a57" />
                    <NavbarOption title="Uranus" color="#4eb6a7" />
                    <NavbarOption title="Neptune" color="#375fc4" />
                </ul>
            </nav>
            }
            
        </header>
        
    )
}
