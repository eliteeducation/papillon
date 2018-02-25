import React from "react";
import TextField from "material-ui/TextField";
import {FormControl, FormControlLabel, FormLabel, FormGroup} from "material-ui/Form";
import Radio, {RadioGroup} from "material-ui/Radio";
import MatiereList from "../../MatiereList";
import {Classes, MatieresSeconcaire, Programme, TARIFS_SECONDAIRE_PROGRAMME_IVOIRIEN} from "Constants";
import Grid from "material-ui/Grid";
import ExpansionPanel, {ExpansionPanelSummary, ExpansionPanelDetails} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import Checkbox from 'material-ui/Checkbox';
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import { withStyles } from 'material-ui/styles';
import PriceTable from './PriceTable';

const styles = theme => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: `${theme.spacing.unit * 5}px 0`,

    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

const soixantePourcent =(montant) => montant * 0.6;
const matiereScientifique =(montant) => montant * 0.6;

const calculPrixMatiere=(classe, programme)=>{
let result = undefined;
    switch (programme) {
        case  Programme.IVOIRIEN : {
            result= soixantePourcent( TARIFS_SECONDAIRE_PROGRAMME_IVOIRIEN [classe]);
            break;
        }
        case  Programme.FRANCAINS : {}
        case  Programme.AMERICAIN : {}
    }
    return result;
}
class InfoEleveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            etablissement: '',
            classe: '',
            matieresSelectionnees: [],
            prixParMatiere : undefined
        }
       /* this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateModuleChange = this.handleCreateModuleChange.bind(this);
        this.handleMatiereChange = this.handleMatiereChange.bind(this);
        this.onSetEnseignantMatiere = this.onSetEnseignantMatiere.bind(this);*/
    }


    onTextFieldChange = name=> (event)=> {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleChange = name => event => {

        this.setState({
            [name]: event.target.value,
        });
        console.log("state : ",this.state)
    };

    handleCreateModuleChange = name => event => {

        this.setState((prevState, props)=>{

            let value =  prevState[name]==undefined ?true:!prevState[name];

         return {
             [name]: value,
         }
        });
        console.table(this.state);
    };


    onSetEnseignantMatiere = (nomEnseignant, matiere) => event => {

        let val = event.target.value;

        this.setState((prevState, props) => {
            return {
                [nomEnseignant]: Object.assign({}, prevState[nomEnseignant], {[matiere]: val})
            }

        });
    };
    handleMatiereChange = event => {
        let {programme, classe} = this.state;
        matieresSelectionnees: event.target.value;
       let prix =  calculPrixMatiere(classe,programme);
        this.setState({
                matieresSelectionnees: event.target.value,
                prixParMatiere : prix
        })
    };

    render() {
        let {classes, level, data} = this.props
        let {etablissement, programme, nomEnseignantEE, nomEnseignantEcole, nomFamille, prenoms, matieresSelectionnees, classe} = this.state;
        data.enfant = this.state;

        return (

            <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.column}>
                        <Typography className={classes.heading}> Idenfication du nouvel élève : </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>{nomFamille ? nomFamille : "Nouvel"} , {prenoms ? prenoms : "Elève"}</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item md={4} xs={12}>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">

                                    <FormLabel component="legend">Programme</FormLabel>
                                    <RadioGroup row name="programme" value={programme}>
                                        <FormControlLabel value={Programme.IVOIRIEN}
                                                          control={<Radio onChange={this.handleChange('programme')}/>}
                                                          label={Programme.IVOIRIEN}/>
                                        <FormControlLabel value={Programme.FRANCAINS}
                                                          control={<Radio onChange={this.handleChange('programme')}/>}
                                                          label={Programme.FRANCAINS}/>
                                        <FormControlLabel value={Programme.AMERICAIN}
                                                          control={<Radio onChange={this.handleChange('programme')}/>}
                                                          label={Programme.AMERICAIN}/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl component="fieldset" required>

                                    <TextField label="Nom de l'enfant" value={nomFamille}
                                               onChange={this.onTextFieldChange('nomFamille')}/>
                                    <TextField label="Prénoms de l'enfant" value={prenoms}
                                               onChange={this.onTextFieldChange('prenoms')}/>
                                    <TextField id="select-classe-native"
                                               select label="Classe de l'enfant"
                                               value={classe}
                                               onChange={this.handleChange('classe')}
                                               SelectProps={{
                                                   native: true
                                               }}
                                               helperText="Selectionnez la classe SVP"
                                               margin="normal">
                                        <option key="0" value=""></option>
                                        {
                                            Classes.map(cl=> <option key={cl.nom} value={cl.nom}>{cl.nom}</option>)
                                        }
                                    </TextField>
                                    <TextField label="Etablissement" value={etablissement}
                                               onChange={this.onTextFieldChange('etablissement')}/>

                                </FormControl>
                            </Grid>
                        </Grid>


                        <Grid item md={5} xs={12}>
                            <Grid container={true}>

                                <Grid item xs={12}>
                                    <MatiereList selectedItems={matieresSelectionnees}
                                                 matieres={ MatieresSeconcaire.map(matiere=>matiere.value)}
                                                 handleChange={this.handleMatiereChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    {matieresSelectionnees.length > 0 &&

                                    matieresSelectionnees.map(matiere=> {
                                        let objMatiere =  MatieresSeconcaire.find(m=>m.value === matiere);
                                       const codeMatiere =objMatiere.code;
                                        return (
                                            <div key={matiere}>
                                                <PriceTable matieresSelectionnees={matieresSelectionnees}/>
                                                {/*   <FormControl component="fieldset">
                                                    <FormLabel component="legend"> Les enseignants pour {matiere}</FormLabel>

                                                     <FormGroup row>
                                                        <TextField label="Enseignant Ecole"
                                                                   value={nomEnseignantEcole ? nomEnseignantEcole[objMatiere.code] : ''}
                                                                   onChange={this.onSetEnseignantMatiere('nomEnseignantEcole',objMatiere.code)}/>
                                                        <TextField label="Enseignant E.E."
                                                                   value={nomEnseignantEE ? nomEnseignantEE[objMatiere.code] : ''}
                                                                   onChange={this.onSetEnseignantMatiere('nomEnseignantEE', objMatiere.code)}/>

                                                       {matieresSelectionnees.length >=2 &&
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={this.state[`${objMatiere.code}-module-${objMatiere.code}`]}
                                                                    onChange={this.handleCreateModuleChange(`${objMatiere.code}-module-${objMatiere.code}`)}
                                                                    value={`${objMatiere.code}-module-${objMatiere.code}`}
                                                                />
                                                            }
                                                            label={`Module ${objMatiere.type}?`}
                                                        />}
                                                    </FormGroup>
                                                </FormControl>*/}
                                                <br />

                                            </div>)
                                    })
                                    }
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item md={3} xs={12}>


                        </Grid>

                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>


        )
    }
}


InfoEleveForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoEleveForm);
