import React, {Component} from "react";
import "./App.css";
import {clients} from "./lib/firebase";
import Accueil from "./common/Accueil";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
/*import ClientList from "containers/ClientList";*/
import CreateClient from "containers/CreateClient/index";
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
        {  /* <div className="App">
         <div className="App-header">
         <h2>papillon</h2>
         </div>
         {!signedIn && <LoginForm onLogin={this.login}/>}
         {signedIn && <Accueil/>}

         </div>*/}
    }

    login() {
        this.setState({signedIn: true});
    }

    render() {
        let signedIn = this.state.signedIn
        console.log("signed : ", signedIn)
        return (

        <Router>
            <div>

                <ul>
                    <li>
                        <Link to="/">Acceuil</Link>
                    </li>
                    <li>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/clients/create">Nouveau Client</Link>
                    </li>


                </ul>


                <Route exact path="/" component={Accueil}/>
                <Route path="/clients" component={ClientList}/>
                <Route path="/clients/create" component={CreateClient}/>
            </div>
        </Router>
        );
    }
}
;


const ClientList = ()=>(
    <div>
        <h1>Clients List</h1>
    </div>
);


export default App;