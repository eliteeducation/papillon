import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ClientList from "../../ClientPage/ClientList/";
import CreateClient from "../../ClientPage/CreateClient/";

import AdminTabs from "./AdminTabs";

import {clients} from '../../../lib/database'

const AdminLayout = ({ match }) => {
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

export default AdminLayout;