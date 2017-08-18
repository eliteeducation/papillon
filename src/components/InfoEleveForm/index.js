/**
 * Created by emma on 18/08/17.
 */


import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import {Classes} from '../../common/Constants'
const InfoEleveForm = ({data, renderField})=>{
    console.log("member = ", data);
    const member = data;
    return (
        <form>
            <Field
                name={`${member}.etablissement`}
                type="text"
                component={renderField}
                label="Etablissement fréquenté"
            />
            <div>
                <label>Classe</label>
                <div>
                    <Field name="classe" component="select">
                        <option></option>
                        {Object.keys(Classes).map((key, index)=> <option key={key} value={index}>{key}</option>)}

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