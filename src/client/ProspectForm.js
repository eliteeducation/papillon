/**
 * Created by emma on 18/08/17.
 */


import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
const ajouterEnfant = ()=> {

}

const style = {

    margin : 12,
}
const ProspectForm = ({adresseProspect, nomProspect, prenomsProspect, telephonePropect1,telephonePropect2}) => (
    <div>

        <TextField value={nomProspect} floatingLabelText="Nom"/>

        <TextField value={prenomsProspect} floatingLabelText="Prénoms"/><br />
        <TextField value={telephonePropect1} floatingLabelText="Téléphone #1"/>
        <TextField value={telephonePropect2} floatingLabelText="Téléphone #2"/><br />

        <br />


        <TextField value={adresseProspect}
                   hintText="Adresse"
                   multiLine={true}
                   rows={3}
        />
        <br />

        <FloatingActionButton onClick={ajouterEnfant} style={style}>
            <ContentAdd  />
        </FloatingActionButton>
        <div>


            <TextField floatingLabelText="Prénoms" /><br />
            <TextField id="text-field-default"
                       floatingLabelText="Téléphone " />



        </div>


        <TextField hintText="Password Field" floatingLabelText="Password"
                   type="password"
        /><br />
        <TextField
            hintText="MultiLine with rows: 2 and rowsMax: 4"
            multiLine={true}
            rows={2}
            rowsMax={4}
        /><br />
        <TextField
            hintText="Message Field"
            floatingLabelText="MultiLine and FloatingLabel"
            multiLine={true}
            rows={2}
        /><br />
        <TextField
            hintText="Full width"
            fullWidth={true}
        />
    </div>
);

export default ProspectForm;