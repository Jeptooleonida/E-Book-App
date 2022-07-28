import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <h1>E-Tech App</h1>
            </div>
            <div className="navbar-content">
                <Link to="/favorites">
                    <h3>Your favorites</h3>
                </Link>

            </div>
        </div>

    )
}

export default Navbar;