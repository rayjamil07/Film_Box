import React from "react";

const Navbar =() =>{
    return (
        <nav className="navbar">
        <h1 className="logo">Film Box</h1>
        <ul className="nav-links" >
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#favourites">Favourites</a>
            </li>
            <li>
                <a href="#recently-watched">Recently Watched</a>
            </li>
        </ul>
        </nav>
    );
};

export default NavBar;