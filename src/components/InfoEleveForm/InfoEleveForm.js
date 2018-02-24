import React from "react";
import TextField from "material-ui/TextField";
import {FormControl, FormControlLabel, FormLabel} from "material-ui/Form";
import Radio, {RadioGroup} from "material-ui/Radio";
import MatiereList from "../MatiereList";
import {Classes, MatieresSeconcaire} from "../../common/Constants";
import Grid from "material-ui/Grid";
import ExpansionPanel, {ExpansionPanelSummary, ExpansionPanelDetails} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";


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
    formControl: {
        margin: theme.spacing.unit * 3,
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
class InfoEleveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            etablissement: '',
            classe: '',
            matieres: []
        }
        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMatiereChange = this.handleMatiereChange.bind(this);
        this.onChangeEnseignantMatiere = this.onChangeEnseignantMatiere.bind(this);
    }


    onTextFieldChange = name=> (event)=> {
        console.log("onTextFieldChange", name, event.target.value)
        this.setState({
            [name]: event.target.value,
        });
    }

    handleChange = name => event => {
        console.log("val : ", event.target.value)
        this.setState({
            [name]: event.target.value,
        });
    };
    onChangeEnseignantMatiere = (enseignant, matiere) => event => {
        console.log("onChangeEnseignantMatiere : ", event.target.value)
        this.setState({
            [enseignant]: {
                [matiere]: event.target.value
            }
        });
    };
    handleMatiereChange = event => {

        this.setState((prevState, props) => {
          /*  let newVal = event.target.value;
            let oldVals = prevState.matieres;
            console.log("ancienne val : ",oldVals)
            console.log("nouvelle val : ", newVal)*/
            return {
                matieres: event.target.value
            };
        })
    };

    render() {
        let {classes, level} = this.props
        let {etablissement, programme, nomEnseignantEE, nomEnseignantEcole, nomFamille, prenoms, matieres} = this.state;
        console.log("matiéères sélectionnées : ", matieres)
        return (

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{nomFamille} , {prenoms}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item md={4} xs={12}>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">

                                    <FormLabel component="legend">Programme</FormLabel>
                                    <RadioGroup row name="programme" value={programme}>
                                        <FormControlLabel value="Ivoirien"
                                                          control={<Radio onChange={this.handleChange('programme')}/>}
                                                          label="Ivoirien"/>
                                        <FormControlLabel value="Francais"
                                                          control={<Radio onChange={this.handleChange('programme')}/>}
                                                          label="Francais"/>
                                        <FormControlLabel value="Americain"
                                                          control={<Radio onChange={this.handleChange('programme')}/>}
                                                          label="Americain"/>
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
                                               value={level}
                                               onChange={this.handleChange('classe')}
                                               SelectProps={{
                                                   native: true,
                                                   MenuProps: {
                                                       className: classes.menu,
                                                   },
                                               }}
                                               helperText="Selectionnez la classe SVP"
                                               margin="normal">
                                        <option key="0" value=""></option>
                                        {  Classes.map(cl=> <option key={cl.nom} value={cl.nom}>{cl.nom}</option>)}

                                    </TextField>
                                    <TextField label="Etablissement" value={etablissement}
                                               onChange={this.onTextFieldChange('etablissement')}/>
                                    {/* <TextField label="Nom de l'enseignant" value={nomEnseignant}
                                     onChange={this.onTextFieldChange('nomEnseignant')}/>*/}

                                </FormControl>
                            </Grid>
                        </Grid>


                        <Grid item md={4} xs={12}>
                            <Grid container={true}>

                                <Grid item xs={12}>
                                    <MatiereList selectedItems={matieres} data={ MatieresSeconcaire.map(m=>m.value)}
                                                 handleChange={this.handleMatiereChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    {matieres.length > 0 &&

                                    matieres.map(mat=> {
                                        return (
                                            <div key={mat}>
                                                <label>{mat}</label>
                                                <TextField label="Enseignant école"
                                                           value={nomEnseignantEcole ? nomEnseignantEcole[{mat}] : ''}
                                                           onChange={this.onChangeEnseignantMatiere('nomEnseignantEcole', {mat})}/>
                                                <TextField label="Enseignant E.E."
                                                           value={nomEnseignantEE ? nomEnseignantEE[{mat}] : ''}
                                                           onChange={this.onChangeEnseignantMatiere('nomEnseignantEE', {mat})}/>
                                            </div>)
                                    })
                                    }
                                </Grid>

                            </Grid>
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
