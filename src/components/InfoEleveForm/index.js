/**
 * Created by emma on 18/08/17.
 */


import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import {Classes} from '../../common/Constants'
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SelectField from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio';


const styles= theme => ({
    root: {
        display: 'flex',
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
const InfoEleveForm = ({data, onClasseChange, onEtablissementChange})=>{
    console.log("member = ", data);
    const enfant = data;
    enfant.etablissement='';
    enfant.classe='';
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" required className={classes.formControl}>
            <TextField floatingLabelText="Etablissement"  value={enfant.etablissement} onChange={onEtablissementChange}/>

            <div>
                <label>Classe</label>
                <div>
                    <SelectField
                        floatingLabelText="Classe"
                        value={enfant.classe}
                        onChange={onClasseChange} >

                        {Object.keys(Classes).map((key, index)=> <MenuItem key={key} value={index} primaryText={key}/> )}
                    </SelectField>


                </div>
            </div>
            <div>
                <label>Programme</label>
                <div>

                    <RadioGroup name="shipName" defaultSelected="Ivoirien" labelPosition="left">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>

                </div>
            </div>

            </FormControl>
        </div>)
}


InfoEleveForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoEleveForm);
