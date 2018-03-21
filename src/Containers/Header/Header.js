/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import {Link} from "react-router-dom";
const Header = ()=> (
    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">Accueil</Link>
            </li>
            <li className="nav-item">
                <Link to="/clients">Clients</Link>
            </li>
            <li className="nav-item">
                <Link to="/teachers">Enseignants</Link>
            </li>
        </ul>
    </nav>
);

export default Header;