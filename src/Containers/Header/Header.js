/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import {withRouter} from "react-router-dom";
const Header = withRouter(({match})=> (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href={`${match.path}/`}>Papillon</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href={`${match.path}/`}>Accueil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`${match.path}/clients`}>Clients</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`${match.path}/teachers`}>Enseignants</a>
                </li>
            </ul>
                </div>
        </nav>

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Bienvenue sur Papaillon</h1>
                <p className="lead">CRM de Elite Education</p>
            </div>
        </div>
    </div>
));

export default Header;