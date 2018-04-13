/**
 * Created by eblonvia on 03/04/2018.
 */

import React from "react";
import {withRouter} from "react-router-dom";

const TeachersNav = withRouter( ({match})=>(

    <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <a class="nav-link" href={`${match.path}/create`}>Nouveau</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href={`${match.path}/`}>Enseignants</a>
            </li>
        </ul>
    </nav>
));

export default TeachersNav;