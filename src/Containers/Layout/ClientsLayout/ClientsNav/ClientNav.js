import React from "react";
import {withRouter} from "react-router-dom";


const ClientNav = withRouter( ({match})=> (

    <nav className="navbar">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href={`${match.path}/create`}>Nouveau</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`${match.path}/`}>Clients</a>
            </li>
        </ul>
    </nav>
));
export default ClientNav