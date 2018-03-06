/**
 * Created by emma on 06/03/18.
 */


import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Button} from "react-bootstrap";
import ClientList from "Containers/ClientPage/ClientList";
import CreateClient from "Containers/ClientPage/CreateClient";

const ClientPage = ()=>(
    <div>
        <Button bsStyle="primary" href={"/clients/create"}>Nouveau Client</Button>
        <Router>
            <div>
                <Route path="/clients" component={ClientList}/>
                <Route path="/clients/create" component={CreateClient}/>
            </div>
        </Router>
    </div>
)

export default ClientPage;