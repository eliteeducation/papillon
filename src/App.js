import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {prospects} from './lib/firebase'
import AutoCompleteExampleDataSource from './common/Autocomplete'
// import {Tab, Tabs} from 'react-bootstrap';
//
// import ContactForm from './components/contactform/ContactForm';
//import NewParentForm from './components/parent/NewParentForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            ecole: ''
        };

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

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Bienvenu sur paillon</h2>
                </div>
                <div className=".form-nouvProspect">
                    <button className=".btn-nouvProspect" onClick={this.showProspectForm}>Nouveau Prospect</button>


                    <form className=".form-nouvProspectInfo" onSubmit={this.handleSubmit}>

                        <div>
                            <label>Nom</label>
                            <input type="text" name="" ref={(input) => this.nomInput = input}/>
                        </div>
                        <div>
                            <label>Prénoms</label>
                            <input type="text" name="" ref={(input) => this.prenomInput = input}/>
                        </div>
                        <div>
                            <label>Adresse</label>
                            <input type="text" name="" ref={(input) => this.adresseInput = input}/>
                        </div>
                        <div>
                            <label>Téléphone</label>
                            <input type="text" name="" ref={(input) => this.telephone1Input = input}/>
                        </div>
                        <div>
                            <label>Téléphone 2 </label>
                            <input type="text" name="" ref={(input) => this.telephone2Input = input}/>
                        </div>

                        <div>
                            <button type="submit">Créer</button>
                            <button type="button" >
                               Effacer
                            </button>
                        </div>
                    </form>

                    <form className=".form-nouvChilddrenInfo">
                        <div>
                            <label>Nom</label>
                            <input type="text" name="" ref={(input) => this.nomInput = input}/>
                        </div>
                        <div>
                            <label>Prénoms</label>
                            <input type="text" name="" ref={(input) => this.prenomInput = input}/>
                        </div>
                        <div>
                            <label>Adresse</label>
                            <input type="text" name="" ref={(input) => this.adresseInput = input}/>
                        </div>
                        <div>
                            <label>Téléphone</label>
                            <input type="text" name="" ref={(input) => this.telephone1Input = input}/>
                        </div>
                        <div>
                            <label>Classe</label>
                            <input type="text" name="" ref={(input) => this.telephone2Input = input}/>
                        </div>
                    </form>

<AutoCompleteExampleDataSource />
                </div>
                {/*< NewParentForm handleSubmit={this.storeResults}/>*/}


            </div>
        );
    }
}
;


export default App;