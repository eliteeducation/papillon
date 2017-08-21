/**
 * Created by emma on 18/08/17.
 */


import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import {Classes} from '../../common/Constants'
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const fixerLaClasse = ()=> {

}
const InfoEleveForm = ({data, renderField})=>{
    console.log("member = ", data);
    const member = data;
    return (
        <form>
            <TextField floatingLabelText="Nom" />
            <Field
                name={`${member}.etablissement`}
                type="text"
                component={renderField}
                label="Etablissement fréquenté"
            />
            <div>
                <label>Classe</label>
                <div>
                    <SelectField
                        floatingLabelText="Classe"
                        value={this.state.value}
                        onChange={fixerLaClasse} >

                        {Object.keys(Classes).map((key, index)=> <MenuItem key={key} value={index} primaryText={key}/> )}
                    </SelectField>

                    <Field name="classe" component="select">
                        <option></option>


                    </Field>
                </div>
            </div>
            <div>
                <label>Programme</label>
                <div>
                    <label><Field name={`${member}.programme`} component="input" type="radio" value="male"/> Français</label>
                    <label><Field name={`${member}.programme`} component="input" type="radio" value="female"/> Ivoirien </label>
                </div>
            </div>


        </form>)
}




export default InfoEleveForm;