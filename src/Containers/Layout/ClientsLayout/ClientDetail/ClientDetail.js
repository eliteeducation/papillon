/**
 * Created by emma on 17/04/18.
 */
import React from "react";
import {clients} from "../../../../services/database";
class ClientDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = props.location.state
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("prev state : ", prevState)
        console.log("prev props : ", nextProps)
        let clientData = undefined;
        clients.child(nextProps.match.params.id).once('value', snapshot=> {
            clientData = snapshot.val();
        })
        return {
            clientData: clientData || {}
        }
    }


    render() {
        const {clientData} = this.state;
        if (!clientData ||!clientData.clientId) return null;
        return <div>
            <div className="container">
                <div className="row">
                    Détails du client : {clientData.firstName} {clientData.lastName}
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