/**
 * Created by emma on 06/03/18.
 */


import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Button} from "react-bootstrap";
import ClientList from "Containers/ClientPage/ClientList";
import CreateClient from "Containers/ClientPage/CreateClient";
import {clients} from '../../lib/database'
class ClientPage extends React.Component {

    /*componentDidMount(){
        this.setState ({
            clients : clients
        })
    }*/
    render() {
      //  let {clients }= this.state;
        console.log("dans le client page", clients)
        return <div>
            <Button bsStyle="primary" href={"/clients/create"}>Nouveau Client</Button>
            <Router>
                <div>
                    <Route exact path="/clients" render={(props)=><ClientList {...props} clients={clients}/>}/>
                    <Route path="/clients/create" component={CreateClient}/>
                </div>
            </Router>
        </div>
    }


}
export default ClientPage;