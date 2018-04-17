/**
 * Created by emma on 17/04/18.
 */
import React from "react";
import {clients} from "../../../../services/database";
class ClientDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            client:{}
        }
        clients.child(props.match.params.id).once('value', snapshot=> {
            this.setState({client: snapshot.val()});
        })
    }


    render() {
        const {client} = this.state;
        if (!client.clientId) return null;
        return <div>
            <div className="container">
                <div className="row">
                    Détails du cliebnt {client.firstName}   {client.lastName}
                </div>
            </div>
            <div className="container">
                <div className="row">

                    tata
                </div>
            </div>
        </div>
    }
}

export default ClientDetail;