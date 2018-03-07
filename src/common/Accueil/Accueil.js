/**
 * Created by emma on 22/08/17.
 */

import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ClientList from "Containers/ClientPage/ClientList/";
import CreateClient from "Containers/ClientPage/CreateClient/";
import ClientPage from "Containers/ClientPage";
import Header from "Containers/Header/";

class Accueil extends React.Component {
    state = {
        value: 0,
    };


    render() {

        return (
            <Router>
                <div >
                    <hr/>

                    <Route path="/prospects" component={ClientList}/>
                    <Route path="/clients/create" component={CreateClient}/>


                </div>
            </Router>
        );
    }
}
;


export default Accueil;