/**
 * Created by emma on 22/08/17.
 */

import React from "react";
import Tabs, {Tab} from "material-ui/Tabs";
import Button from "material-ui/Button";
import ProspectForm from "../../components/Form/ProspectForm/ProspectForm";
import TabContainer from "../../components/TabContainer"
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


class Accueil extends React.Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;
        return (
            <div >
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Prospects">
                        <div>
                            <h2 style={styles.headline}>Les prospects</h2>


                        </div>
                    </Tab>

                    <Tab label="Clients">
                        <div>
                            <h2 style={styles.headline}>Les clients</h2>

                            <Button variant="raised" color="secondary" style={styles.addButton}>
                                Nouveau
                            </Button>
                        </div>
                    </Tab>

                    <Tab label="Enseignants"
                         data-route="/home">
                        <div>
                            <h2 style={styles.headline}>Les enseignants</h2>

                            <Button variant="raised" color="secondary" style={styles.addButton}>
                                Nouveau
                            </Button>
                        </div>
                    </Tab>
                </Tabs>
                {value === 0 && <TabContainer>

                    <ProspectForm />
                </TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
            </div>
        );
    }
}
;


export default Accueil;