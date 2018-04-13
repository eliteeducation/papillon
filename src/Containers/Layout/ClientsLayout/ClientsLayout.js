/**
 * Created by eblonvia on 20/03/2018.
 */
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ClientList from "../../ClientPage/ClientList/";
import CreateClient from "../../ClientPage/CreateClient/";

import ClientNav from "./ClientsNav";

import {clients} from '../../../lib/database'
/*clients.once('value', snapshot=>{
    snapshot.forEach(data=>console.log("val : ", data.val()))
   // console.log("val : ", snapshot.val())
})*/
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