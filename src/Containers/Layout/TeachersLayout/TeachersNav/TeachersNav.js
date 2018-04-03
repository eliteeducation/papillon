/**
 * Created by eblonvia on 03/04/2018.
 */

import React from 'react'
import { NavLink ,withRouter} from 'react-router-dom'

const TeachersNav = withRouter( ({match})=>(

    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <NavLink to={`${match.path}/create`}>Nouveau</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`${match.path}/`}>Enseignants</NavLink>
            </li>
        </ul>
    </nav>
));

export default TeachersNav;