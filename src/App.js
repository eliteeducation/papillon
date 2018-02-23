import React, {Component} from "react";

import "./App.css";
import {clients} from "./lib/firebase";
import Accueil from "./common/Accueil";
import LoginForm from "./common/login/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
const style = {
    margin: 12,
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            ecole: '',
            signedIn: true
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.showProspectForm = this.showProspectForm.bind(this);
    }


    handleSubmit() {

        let nom = this.nomInput.value;
        let prenom = this.prenomInput.value;
        let adresse = this.adresseInput.value;
        let telephone1 = this.telephone1Input.value;
        let telephone2 = this.telephone2Input.value;
        clients.push({
            'nom': nom,
            'prenom': prenom,
            'adresse': adresse,
            'telephone1': telephone1,
            'telephone2': telephone2,
        })
    }

    showProspectForm() {
    }

    login() {
        this.setState({signedIn: true});
    }

    render() {
        let signedIn = this.state.signedIn
        console.log("signed : ", signedIn)
        return (
            <div className="App">
                <div className="App-header">
                    <h2>papillon</h2>
                </div>
                {!signedIn && <LoginForm onLogin={this.login}/>}
                {signedIn && <Accueil/>}

            </div>
        );
    }
}
;


export default App;