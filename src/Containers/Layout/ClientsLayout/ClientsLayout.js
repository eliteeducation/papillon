/**
 * Created by eblonvia on 20/03/2018.
 */
import React from 'react';
import { Switch, Route, Redirect,NavLink, withRouter } from 'react-router-dom';
import ClientList from "../../ClientPage/ClientList/";
import CreateClient from "../../ClientPage/CreateClient/";



const ClientNav =  ()=> (

   <nav className="navbar navbar-expand-lg">
        <ul className="nav">
            <li className="nav-item">
                <NavLink to="clients/create">Nouveau</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="clients/">Clients</NavLink>
            </li>
        </ul>
    </nav>
);


const ClientsLayout = ({ match }) => {
    console.log("ClientsLayout : ", match);

    return <div className="primary-layout">
        <ClientNav />
        <main>
            <Switch>
                <Route exact path={`${match.path}/`} component={ClientList}/>
                <Route path={`${match.path}/create`} component={CreateClient}/>
            </Switch>
        </main>
    </div>
}

export default ClientsLayout;