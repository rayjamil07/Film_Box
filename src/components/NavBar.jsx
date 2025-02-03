import React from "react";
import { Link } from "react-router-dom";

const NavBar =() =>{
    return (
        <nav className="navbar">
        <h1 className="logo">Film Box</h1>
        <ul className="nav-links" >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
            <li>
                <Link to="/recently-watched">Recently Watched</Link>
            </li>
        </ul>
        </nav>
    );
};

export default NavBar;