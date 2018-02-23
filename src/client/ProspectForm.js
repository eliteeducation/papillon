/**
 * Created by emma on 18/08/17.
 */


import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import ContentAdd from "material-ui-icons/Add";
import FloatingActionButton from "../components/FloatingActionButton";
import {clients} from "../lib/firebase";
import InfoEleveForm from "../components/InfoEleveForm";
import AddIcon from 'material-ui-icons/Add';
import Divider from 'material-ui/Divider';
const style = {
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

class ProspectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adresseProspect: '',
            nomProspect: '',
            prenomsProspect: '',
            telephonePropect1: '',
            telephonePropect2: '',
            enfants: []
        }

        this.ajouterEnfant = this.ajouterEnfant.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNomProspectChange = this.handleNomProspectChange.bind(this);
        this.handlePrenomsProspectChange = this.handlePrenomsProspectChange.bind(this);
        this.handleTelephonePropect2Change = this.handleTelephonePropect2Change.bind(this);
        this.handleTelephonePropect1Change = this.handleTelephonePropect1Change.bind(this);
        this.handleAdresseChange = this.handleAdresseChange.bind(this);
        this.onClasseChange = this.onClasseChange.bind(this);
        this.onEtablissementChange = this.onEtablissementChange.bind(this);
    }

    ajouterEnfant = () => {
        this.setState((prevState, props) => {
            enfants : prevState.enfants.push({})
        })
        console.log("taille tableau : ", this.state.enfants.length);
    }

    handleNomProspectChange = (event) => {
        this.setState({
            nomProspect: event.target.value,
        });
    };

    handlePrenomsProspectChange = (event) => {
        this.setState({
            prenomsProspect: event.target.value,
        });
    };

    handleTelephonePropect1Change = (event) => {
        this.setState({
            telephonePropect1: event.target.value,
        });
    };

    handleTelephonePropect2Change = (event) => {
        this.setState({
            telephonePropect2: event.target.value,
        });
    };
    handleAdresseChange = (event) => {
        this.setState({
            adresseProspect: event.target.value,
        });
    };


    handleSubmit() {
        console.log("le state");
        console.table(this.state)
        let {adresseProspect, nomProspect, prenomsProspect, telephonePropect1, telephonePropect2, enfants} = this.state;
        clients.push({
            'nom': nomProspect,
            'prenom': prenomsProspect,
            'adresse': adresseProspect,
            'telephone1': telephonePropect1,
            'telephone2': telephonePropect2,
        })
    }

    preventEnterKey = e => {
        if (e.key === "Enter" && e.target.tagName.toLowerCase() !== "textarea") {
            e.preventDefault();
            var node = e.target.nextSibling;
            while (node) {
                if (node.tagName === "INPUT" || node.tagName === "SELECT") {
                    node.focus();
                    break;
                }
                node = node.nextSibling;
            }
        }
    };
    onClasseChange = (event)=> {
        this.state.enfants[this.state.enfants.length - 1].classe = event.target.value;
    }

    onEtablissementChange = (event)=> {
        this.state.enfants[this.state.enfants.length - 1].etablissement = event.target.value;
    }

    render() {
        let {adresseProspect, nomProspect, prenomsProspect, telephonePropect1, telephonePropect2, enfants} = this.state;
        return (

            <form onSubmit={this.handleSubmit} onKeyPress={this.preventEnterKey}>

                <TextField label="Nom " value={this.state.nomProspect} floatingLabelText="Nom"
                           onChange={this.handleNomProspectChange}/>

                <TextField label="Prénoms" value={prenomsProspect} floatingLabelText="Prénoms"
                           onChange={this.handlePrenomsProspectChange}/><br />
                <TextField label="Téléphone #1" value={telephonePropect1}
                           onChange={this.handleTelephonePropect1Change}/>
                <TextField  label="Téléphone #2" value={telephonePropect2}
                           onChange={this.handleTelephonePropect2Change}/><br />

                <br />


                <TextField value={adresseProspect}
                           onChange={this.handleAdresseChange}
                           label="Adresse"
                           multiLine={true}
                           rows={3}/>
                <br />
                <Divider />


                {enfants && enfants.length > 0 &&
                <InfoEleveForm data={enfants[enfants.length - 1]} onClasseChange={this.onClasseChange}
                               onEtablissementChange={this.onEtablissementChange}/> }

                <Button onClick={this.handleSubmit} variant="raised" color="secondary" style={style.addButton}>
                    Valider
                </Button>
                <Button onClick={this.ajouterEnfant} variant="fab" arial-label="add" color="primary"
                        style={style.addButton}>
                    <AddIcon/>
                </Button>
                <br />

            </form>
        );
    }


}
export default ProspectForm;