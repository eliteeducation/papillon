/**
 * Created by eblonvia on 20/03/2018.
 */
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ClientList from "./ClientList/";
import CreateClient from "./CreateClient/";
import ClientDetail from "./ClientDetail/";

import ClientTabs from "./ClientTabs";

import {clients} from '../../../services/database'

const ClientsLayout = ({ match }) => {
    return (<div className="primary-layout">
        <ClientTabs />
        <main>
            <Switch>
                <Route exact path={`${match.path}/`}  render={(props)=><ClientList {...props} clients={clients}/>}/>
                <Route exact path={`${match.path}/create`} component={CreateClient}/>
                <Route path={`${match.path}/:id`} component={ClientDetail}/>

            </Switch>
        </main>
    </div>)
}

export default ClientsLayout;