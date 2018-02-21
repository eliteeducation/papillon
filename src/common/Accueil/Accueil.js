/**
 * Created by emma on 22/08/17.
 */

import React from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import Button from "material-ui/Button";
import ProspectForm from "../../client/ProspectForm";
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

                <Button variant="raised" color="secondary" style={styles.addButton} >
                    Nouveau
                </Button>
                <ProspectForm />
            </div>
        </Tab>

        <Tab label="Clients">
            <div>
                <h2 style={styles.headline}>Les clients</h2>

                <Button variant="raised" color="secondary" style={styles.addButton} >
                    Nouveau
                </Button>
            </div>
        </Tab>

        <Tab label="Enseignants"
             data-route="/home"
             onActive={handleActive}>
            <div>
                <h2 style={styles.headline}>Les enseignants</h2>

                <Button variant="raised" color="secondary" style={styles.addButton} >
                    Nouveau
                </Button>
            </div>
        </Tab>
    </Tabs>
    );
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default Accueil;