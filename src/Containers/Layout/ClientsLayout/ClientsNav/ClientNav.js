import React from 'react';
import { NavLink ,withRouter} from 'react-router-dom';


const ClientNav = withRouter( ({match})=> (

    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <a class="nav-link" href={`${match.path}/create`}>Nouveau</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href={`${match.path}/`}>Clients</a>
            </li>
        </ul>
    </nav>
));
export default ClientNav