/**
 * Created by eblonvia on 20/03/2018.
 */
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ClientList from "./ClientList/";
import CreateClient from "./CreateClient/";

import ClientNav from "./ClientsNav";

import {clients, students} from '../../../services/database'

const ClientsLayout = ({ match }) => {
    return (<div className="primary-layout">
        <ClientNav />
        <main>
            <Switch>
                <Route exact path={`${match.path}/`}  render={(props)=><ClientList {...props} clients={clients}/>}/>
                <Route path={`${match.path}/create`} component={CreateClient}/>
            </Switch>
        </main>
    </div>)
}

export default ClientsLayout;