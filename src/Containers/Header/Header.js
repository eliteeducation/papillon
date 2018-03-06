/**
 * Created by emma on 06/03/18.
 */
import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
const Header = ()=> (
    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">Acceuil</Link>
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