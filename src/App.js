import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {prospects} from './lib/firebase'
import AutoCompleteExampleDataSource from './common/Autocomplete'
import ProspectForm from './client/ProspectForm'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Accueil from './common/Accueil'
import LoginForm from './common/login'
import RaisedButton from 'material-ui/RaisedButton';
import firebase from './lib/firebase';

const style = {
    margin: 12,
};



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            ecole: '',
            signedIn: false
        };


        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
            } else {
                // User is signed out.
                // ...
            }
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showProspectForm = this.showProspectForm.bind(this);
    }


    handleSubmit() {

        let nom = this.nomInput.value;
        let prenom = this.prenomInput.value;
        let adresse = this.adresseInput.value;
        let telephone1 = this.telephone1Input.value;
        let telephone2 = this.telephone2Input.value;
        prospects.push({
            'nom': nom,
            'prenom': prenom,
            'adresse': adresse,
            'telephone1': telephone1,
            'telephone2': telephone2,
        })
    }

    showProspectForm() {
    }

    render() {
let signedIn = this.state.signedIn
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Bienvenu sur paillon</h2>
                </div>
                {!signedIn && <LoginForm/>}
                {signedIn &&  <Accueil/>}

            </div>
        );
    }
}
;


export default App;