/**
 * Created by emma on 22/08/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import ProspectForm from '../../client/ProspectForm'
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    addButton: {
        margin: 12,
    }
};

const Accueil = () => {

    return (
    <Tabs>
        <Tab label="Prospects">
            <div>
                <h2 style={styles.headline}>Les prospects</h2>
                <RaisedButton label="Nouveau" primary={true} style={styles.addButton}/>
                <ProspectForm />
            </div>
        </Tab>

        <Tab label="Clients">
            <div>
                <h2 style={styles.headline}>Les clients</h2>
                <RaisedButton label="Nouveau" primary={true} style={styles.addButton}/>
            </div>
        </Tab>

        <Tab label="Enseignants"
             data-route="/home"
             onActive={handleActive}>
            <div>
                <h2 style={styles.headline}>Les enseignants</h2>
                <RaisedButton label="Nouveau" primary={true} style={styles.addButton}/>
            </div>
        </Tab>
    </Tabs>
    );
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default Accueil;