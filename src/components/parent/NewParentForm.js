import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form';
import validate from './validate'
import InfoPersoForm from '../InfoPersoForm'
import InfoEleveForm from '../InfoEleveForm'
const renderField = ({input, label, type, className, meta: {touched, error}}) =>
    <div className={className}>
        <label>
            {label}
        </label>
        <div>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span> {error} </span>}
        </div>
    </div>

const renderEnfants = ({fields, meta: {error}}) =>
    <ul>
        <div>
            <button type="button" onClick={() => fields.push()}>
                Ajouter un enfant
            </button>
        </div>
        {fields.map((child, index) =>
            <li key={index}>

                <InfoPersoForm data={child} renderField={renderField}/>
                <InfoEleveForm data={child} renderField={renderField}/>
                <Field
                    name={child}
                    type="text"
                    component={renderField}
                    label={`Téléphone #${index + 1}`}
                />
            </li>
        )}
        {error &&
        <li className="error">
            {error}
        </li>}
    </ul>

const renderClients = ({fields, meta: {error, submitFailed}}) =>
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Nouveau Client
            </button>
            {submitFailed && error && <span> {error}</span>}
        </li>
        {fields.map((client, index) =>
            <li key={index}>
                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                />
                <h4>
                    Member #{index + 1}
                </h4>
                <InfoPersoForm data={client} renderField={renderField}/>
                <div>
                    <FieldArray name={`${client}.children`} component={renderEnfants}/>
                </div>
            </li>
        )}
    </ul>


const NewParentForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
        return (
        <form onSubmit={handleSubmit}>

            <FieldArray name="clients" component={renderClients}/>
            <div>
                <button type="submit" disabled={submitting}>
                    Enregistrer
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Effacer la saisie
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'NewParentForm', // a unique identifier for this form
    validate
})(NewParentForm);