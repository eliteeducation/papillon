/**
 * Created by emma on 18/08/17.
 */


import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import ContentAdd from "material-ui/svg-icons/content/add";
import FloatingActionButton from "../components/FloatingActionButton";
import {clients} from "../lib/firebase";
import InfoEleveForm from "../components/InfoEleveForm";


const style = {

    margin: 12,
}


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

                <TextField value={this.state.nomProspect} floatingLabelText="Nom"
                           onChange={this.handleNomProspectChange}/>

                <TextField value={prenomsProspect} floatingLabelText="Prénoms"
                           onChange={this.handlePrenomsProspectChange}/><br />
                <TextField value={telephonePropect1} floatingLabelText="Téléphone #1"
                           onChange={this.handleTelephonePropect1Change}/>
                <TextField value={telephonePropect2} floatingLabelText="Téléphone #2"
                           onChange={this.handleTelephonePropect2Change}/><br />

                <br />


                <TextField value={adresseProspect} onChange={this.handleAdresseChange}

                           floatingLabelText="Veuillez renseigner l'adresse"
                           multiLine={true}
                           rows={3}
                />
                <br />

                <FloatingActionButton onClick={this.ajouterEnfant} style={style}>
                    <ContentAdd  />
                </FloatingActionButton>
                {enfants && enfants.length > 0 &&
                <InfoEleveForm data={enfants[enfants.length - 1]} onClasseChange={this.onClasseChange}
                               onEtablissementChange={this.onEtablissementChange}/> }

                <Button type="submit" data-e2b-id="validate-case-form">Valider</Button>
                <br />

            </form>
        );
    }


}
export default ProspectForm;