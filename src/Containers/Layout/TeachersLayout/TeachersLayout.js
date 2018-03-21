/**
 * Created by eblonvia on 20/03/2018.
 */


import React from 'react'
import { Switch, Route, Redirect,NavLink, withRouter } from 'react-router-dom'


import TeachersList from "../../TeachersList/";
import TeacherCreate from "../../TeacherCreate/";
//import ClientPage from "../../ClientPage";
//import Header from "Containers/Header/";


const TeacherNav = withRouter( ({match})=>(

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


const TeachersLayout = ({ match }) => (
    <div className="primary-layout">
        <TeacherNav />
        <main>
            <Switch>

                <Route path={`${match.path}/create`} component={TeacherCreate}/>
                <Route path={`${match.path}/`} component={TeachersList}/>
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default TeachersLayout