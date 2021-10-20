import React from 'react'
import "./navbaroption.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const NavbarOption = ({title, color}) => {
    return (
        <li className="navbaroption">
            <span>

                <div style= {{backgroundColor: `${color}`}} className="circle">

                </div>
                <Link className="link" to={`/${title}`}>{title}</Link>

            </span>
            <img src={"./assets/images/icon-chevron.svg"}></img>
        </li>
    )
}
