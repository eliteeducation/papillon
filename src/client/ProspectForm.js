/**
 * Created by emma on 18/08/17.
 */


import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import {clients} from "../lib/firebase";
import InfoEleveForm from "../components/InfoEleveForm";
import Grid from "material-ui/Grid";
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
        });
        console.log("taille tableau : ", this.state.enfants.length);
        console.log("Les enfants: ", this.state.enfants);
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
        let {adresseProspect, nomProspect, quartier, lieudit, prenomsProspect, telephonePropect1, telephonePropect2, commune, enfants} = this.state;
        console.log("ProspectForm - pushons : ",this.state);
        clients.push({
            'nom': nomProspect ? nomProspect:'',
            'prenom':prenomsProspect ?  prenomsProspect:prenomsProspect,
            'quartier': quartier?  prenomsProspect:prenomsProspect,
            'lieudit': lieudit?  prenomsProspect:prenomsProspect,
            'commune': commune?  prenomsProspect:prenomsProspect,
            'adresse': adresseProspect?  prenomsProspect:prenomsProspect,
            'telephone1': telephonePropect1?  prenomsProspect:prenomsProspect,
            'telephone2': telephonePropect2?  prenomsProspect:prenomsProspect,
            'enfants':enfants ?enfants : []
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
        let {adresseProspect, nomProspect, quartier, lieudit, prenomsProspect, telephonePropect1, telephonePropect2, commune, enfants} = this.state;
        console.log("les enfants : ", enfants);
        return (

            <form onSubmit={this.handleSubmit} onKeyPress={this.preventEnterKey}>
                <Grid container>
                    <Grid item md={4} xs={12}>
                        <TextField fullWidth={true} label="Nom " value={nomProspect}
                                   onChange={this.handleNomProspectChange}/>

                        <TextField fullWidth={true} label="Prénoms" value={prenomsProspect}
                                   onChange={this.handlePrenomsProspectChange}/><br />
                        <TextField fullWidth={true} label="Téléphone #1" value={telephonePropect1}
                                   onChange={this.handleTelephonePropect1Change}/>
                        <TextField fullWidth={true} label="Téléphone #2" value={telephonePropect2}
                                   onChange={this.handleTelephonePropect2Change}/><br />


                    </Grid>

                    <Grid item md={4} xs={12}>


                        <TextField fullWidth={true} label="Commune " value={commune}
                                   onChange={this.handleNomProspectChange}/>

                        <TextField fullWidth={true} label="Quartier" value={quartier}
                                   onChange={this.handlePrenomsProspectChange}/><br />
                        <TextField fullWidth={true} label="Cité ou Lieu-dit" value={lieudit}
                                   onChange={this.handleTelephonePropect1Change}/>
                        <TextField value={adresseProspect}
                                   onChange={this.handleAdresseChange}
                                   label="Complément Adresse"
                                   rows={3}/>
                    </Grid>

                    <Grid item xs={12}>

                        {enfants && enfants.length > 0 &&
                        <InfoEleveForm data={enfants[enfants.length - 1]}
                                       onClasseChange={this.onClasseChange}
                                       onEtablissementChange={this.onEtablissementChange}/> }
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={this.handleSubmit} variant="raised" color="primary" style={style.addButton}>
                            Valider
                        </Button>
                        <Button onClick={this.ajouterEnfant} variant="raised" color="primary" style={style.addButton}>
                            Ajouter Enfant
                        </Button>
                    </Grid>

                </Grid>
            </form>
        );
    }


}
export default ProspectForm;