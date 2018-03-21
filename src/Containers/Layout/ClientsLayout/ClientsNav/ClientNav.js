import React from 'react';
import { NavLink ,withRouter} from 'react-router-dom'
const ClientNav = withRouter( ({match})=> (

    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <NavLink to={`${match.path}/create`}>Nouveau</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`${match.path}/`}>Clients</NavLink>
            </li>
        </ul>
    </nav>
));
export default ClientNav