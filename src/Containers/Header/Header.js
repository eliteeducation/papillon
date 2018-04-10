/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import {Link, withRouter} from "react-router-dom";
const Header = withRouter(({match})=> (
    <div>
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

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Welcome to my website</h1>
                <p className="lead">I'm a developer and designer. Check my portfolio below</p>
            </div>
        </div>
    </div>
));

export default Header;