import React from "react-dom";

import airbnbLogo from "../assets/images/airbnb-logo.png";



export default function Navbar() {
    return (
        <nav className="navbar">
           <img className="navbar__logo" src={airbnbLogo} alt="logo" />
        </nav>
    )
}