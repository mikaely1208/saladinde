import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to= "/Order"> Order </Link>
            <Link to="/Accueil"> Profile </Link>

        </nav>
    )
}