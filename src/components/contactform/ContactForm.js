import React from 'react'
import {Field, reduxForm} from 'redux-form';
import CheckboxGroup from '../checkboxgroup/CheckBoxGroup';

const ContactForm = props => {
    let optionsList = [
        {id: 1, name: 'YEKANGOA'},
        {id: 2, name: 'COURS DE VACANCES'},
        {id: 3,  name: 'IMAGINE TON FUTUR'},
        {id: 4,  name: 'SEMAINE DE COACHING'},
        {id: 5,  name: 'SOUTIEN SCOLAIRE'}

        ];
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>Compte - Rendu</h1>

            <div>
                <label>Appelation</label>
                <div>
                    <label>
                        <Field
                            name="sex"
                            component="input"
                            type="radio"
                            value="mr"
                        />{' '}
                        Monsieur
                    </label>
                    <label>
                        <Field
                            name="sex"
                            component="input"
                            type="radio"
                            value="mrs"
                        />{' '}
                        Madame
                    </label>

                    <label>
                        <Field
                            name="sex"
                            component="input"
                            type="radio"
                            value="ms"
                        />{' '}
                        Mademoiselle
                    </label>
                </div>
            </div>
            <div>
                <label>Nom du contact</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="NOM"
                    />
                </div>
            </div>
            <div>
                <label>Prénoms du contact</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="Prénoms du contact"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div>
                <label>Numéro de téléphone</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>


            <div>
                <label>Service choisi</label>
                <Field name="service" component={CheckboxGroup} options={optionsList}/>

            </div>

            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea"/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(ContactForm)