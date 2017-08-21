import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {prospects} from './lib/firebase'
import AutoCompleteExampleDataSource from './common/Autocomplete'
import ProspectForm from './client/ProspectForm'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

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

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}
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

                </div>

                <Tabs>
                    <Tab label="Prospects">
                        <div>
                            <h2 style={styles.headline}>Tab One</h2>
                            <RaisedButton label="Nouveau" primary={true} style={styles.addButton}/>
                            <ProspectForm />
                            <p>
                                You can put any sort of HTML or react component in here. It even keeps the component
                                state!
                            </p>
                            <Slider name="slider0" defaultValue={0.5}/>
                        </div>
                    </Tab>
                    <Tab label="Clients">
                        <div>
                            <h2 style={styles.headline}>Tab Two</h2>
                            <RaisedButton label="Nouveau" primary={true} style={styles.addButton}/>
                            <p>
                                This is another example tab.
                            </p>
                        </div>
                    </Tab>
                    <Tab
                        label="Enseignants"
                        data-route="/home"
                        onActive={handleActive}
                    >
                        <div>
                            <h2 style={styles.headline}>Tab Three</h2>
                            <RaisedButton label="Nouveau" primary={true} style={styles.addButton}/>
                            <p>
                                This is a third example tab.
                            </p>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        );
    }
}
;


export default App;