import React from 'react';
// import {Link} from "react-router-dom";
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <h1>E-Tech App</h1>
            </div>
            <div className="navbar-content">
               <ul>
                   <li>
                        <a href="/home">Home</a>
                   </li>
                   <li>
                        <a href="/home">Favourites</a>
                   </li>
               </ul>

            </div>
        </div>

    )
    }

    export default Navbar;