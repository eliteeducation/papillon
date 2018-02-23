import React from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Select from "material-ui/Select";
import Input, {InputLabel} from "material-ui/Input";
import {MenuItem} from "material-ui/Menu";
import {FormControl, FormControlLabel, FormHelperText} from "material-ui/Form";
import Radio, {RadioGroup} from "material-ui/Radio";
import MatiereList from "../MatiereList";
import {Classes} from "../../common/Constants";
import Grid from "material-ui/Grid";
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
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
});
class InfoEleveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            etablissement: '',
            classe: ''
        }
        this.onEtablissementChange = this.onEtablissementChange.bind(this);
    }


    onEtablissementChange = (event)=> {
        console.log("hendal etabliessement change")
    }

    //   const { classes } = this.props;
//
    render() {
        let {data, onClasseChange, classes} = this.props
        let {etablissement} = this.state;
        return (
            <Grid sm={12}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Nom de l'enfant</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container>
                            <Grid item md={4} xs={12}>
                                <FormControl component="fieldset" required className={classes.formControl}>
                                    <TextField label="Nom de l'enfant" value={etablissement}
                                               onChange={this.onEtablissementChange}/>
                                    <TextField label="Prénoms de l'enfant" value={etablissement}
                                               onChange={this.onEtablissementChange}/>
                                    <TextField label="Classe de l'enfant" value={etablissement}
                                               onChange={this.onEtablissementChange}/>
                                    <TextField label="Etablissement" value={etablissement}
                                               onChange={this.onEtablissementChange}/>
                                    <TextField label="Nom de l'enseignant" value={etablissement}
                                               onChange={this.onEtablissementChange}/>

                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="choix-classe">Classes</InputLabel>
                                    <Select
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        input={<Input name="classe" id="choix-classe"/>}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {  Classes.map(cl=> <MenuItem key={cl.nom} value={10}>{cl.nom}</MenuItem>)}

                                    </Select>
                                    <FormHelperText>Some important helper text</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <div>
                                    <label>Matieres</label>
                                    <MatiereList/>
                                </div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Programme</InputLabel>
                                    <RadioGroup name="shipName">
                                        <FormControlLabel value="Ivoirien" control={<Radio />} label="Ivoirien"/>
                                        <FormControlLabel value="Francais" control={<Radio />} label="Francais"/>
                                        <FormControlLabel value="Americain" control={<Radio />} label="Americain"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>

        )
    }
}


InfoEleveForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoEleveForm);