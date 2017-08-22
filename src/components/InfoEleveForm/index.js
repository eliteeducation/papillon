/**
 * Created by emma on 18/08/17.
 */


import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import {Classes} from '../../common/Constants'
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};
const InfoEleveForm = ({data, onClasseChange, onEtablissementChange})=>{
    console.log("member = ", data);
    const enfant = data;
    enfant.etablissement='';
    enfant.classe='';

    return (
        <form>
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

                    <RadioButtonGroup name="shipName" defaultSelected="Ivoirien" labelPosition="left">
                        <RadioButton
                            value="Ivoirien"
                            label="Ivoirien"

                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="Français"
                            label="Français"

                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>

                </div>
            </div>


        </form>)
}




export default InfoEleveForm;