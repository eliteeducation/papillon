import React from "react";
import {withRouter} from "react-router-dom";


const AdminTabs = withRouter( ({match})=> (

    <nav className="navbar">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href={`${match.path}/refs`}>Données de Référence</a>
            </li>
           {/* <li className="nav-item">
                <a className="nav-link" href={`${match.path}/`}>Clients</a>
            </li>*/}
        </ul>
    </nav>
));
export default AdminTabs;