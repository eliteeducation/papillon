/**
 * Created by emma on 17/08/17.
 */

import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
const InfoPersoForm = ({data, renderField})=>{
    console.log("member = ", data);
    const member = data;
    return (
        <diV>
            <Field
                name={`${member}.firstName`}
                type="text"
                component={renderField}
                label="Prénoms"
            />
            <Field
                name={`${member}.lastName`}
                type="text"
                component={renderField}
                label="Nom"
            />
            <Field
                name={`${member}.dateNaissance`}
                type="text"
                component={renderField}
                label="Date De Naiss."
            />
            <Field
                name={`${member}.telephone1`}
                type="text"
                component={renderField}
                label="Téléphone #1"
            />
            <Field
                name={`${member}.telephone2`}
                type="text"
                component={renderField}
                label="Téléphone #2"
            />
            <Field
                name={`${member}.adresse`}
                type="text"
                component={renderField}
                label="Adresse"
            />
        </diV>)
}
export default InfoPersoForm;