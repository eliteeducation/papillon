/**
 * Created by emma on 22/08/17.
 */

import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ClientList from "containers/ClientList/";
import CreateClient from "containers/CreateClient/";
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    addButton: {
        margin: 12,
    }
};




class Accueil extends React.Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;
        return (
            <Router>
                <div >

                    <ul>
                        <li>
                            <Link to="/prospects">Prospects</Link>
                        </li>
                        <li>
                            <Link to="/clients">Clients</Link>
                        </li>
                        <li>
                            <Link to="/teachers">Enseignants</Link>
                        </li>
                        <li>
                            <Link to="/compta">Comptabilité</Link>
                        </li>
                    </ul>
<hr/>

                    <Route path="/prospects" component={ClientList}/>
                    <Route path="/clients" component={ClientList}/>
                    <Route path="/clients/create" component={CreateClient}/>



                </div>
            </Router>
        );
    }
}
;


export default Accueil;