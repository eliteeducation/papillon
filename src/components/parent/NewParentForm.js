import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate'
import InfoPersoForm from '../InfoPersoForm'
const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div>
        <label>
            {label}
        </label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched &&
            error &&
            <span>
          {error}
        </span>}
        </div>
    </div>

const renderEnfants = ({ fields, meta: { error } }) =>
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>
                Ajouter un enfant
            </button>
        </li>
        {fields.map((hobby, index) =>
            <li key={index}>
                <button
                    type="button"
                    title="supprimer Téléphone"
                    onClick={() => fields.remove(index)}
                />
                <Field
                    name={hobby}
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

const renderClients = ({ fields, meta: { error, submitFailed } }) =>
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Nouveau Client
            </button>
            {submitFailed && error && <span> {error}</span>}
        </li>
        {fields.map((member, index) =>
            <li key={index}>
                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                />
                <h4>
                    Member #{index + 1}
                </h4>

                <InfoPersoForm data={member} renderField={renderField} />
                <FieldArray name={`${member}.hobbies`} component={renderEnfants} />
            </li>
        )}
    </ul>



const NewParentForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            {/*<Field*/}
                {/*name="clubName"*/}
                {/*type="text"*/}
                {/*component={renderField}*/}
                {/*label="Club Name"*/}
            {/*/>*/}
            <FieldArray name="clients" component={renderClients} />
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