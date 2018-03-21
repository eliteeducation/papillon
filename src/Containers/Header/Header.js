/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import {Link, withRouter} from "react-router-dom";
const Header = withRouter(({match})=> (
    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <Link to={`${match.path}/`}>Accueil</Link>
            </li>
            <li className="nav-item">
                <Link to={`${match.path}/clients`}>Clients</Link>
            </li>
            <li className="nav-item">
                <Link to={`${match.path}/teachers`}>Enseignants</Link>
            </li>
        </ul>
    </nav>
));

export default Header;