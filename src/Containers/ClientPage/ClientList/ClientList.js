/**
 * Created by emma on 06/03/18.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import {GroupingState,IntegratedGrouping} from '@devexpress/dx-react-grid';
import { Grid,Table,TableHeaderRow,TableGroupRow} from '@devexpress/dx-react-grid-bootstrap3';

class ClientList extends React.Component {
    constructor(props) {
        super(props);
console.log("props : " ,props)
console.log("props : " ,props.params)
        this.state = {
            columns: [
                { name: 'firstName', title: 'Nom De Famille' },
                { name: 'email', title: 'Adresse Email' },
                { name: 'quartier', title: 'Quartier' },
                { name: 'commune', title: 'Commune' },
            ],
            rows:  [
                { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
                { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
                { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
                { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
                { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
                { sex: "Male", name: "Robert", city: "Las Vegas", car: "Chevrolet Cruze" },
                { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
                { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
                { sex: "Male", name: "Thomas", city: "Rio de Janeiro", car: "Honda Accord" },
                { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
                { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
                { sex: "Male", name: "Robert", city: "Los Angeles", car: "Honda Accord" },
                { sex: "Male", name: "William", city: "Los Angeles", car: "Honda Civic" },
                { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
            ],
          // rows:props.params.clients
        };
    }
    render() {
        const { rows, columns } = this.state;

        return (

            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}>
                    <GroupingState
                        grouping={[{ columnName: 'commune' }]}
                    />
                    <IntegratedGrouping />
                    <Table />
                    <TableHeaderRow />
                    <TableGroupRow />
                </Grid>
            </Paper>
        );
    }
}

/*const ClientList = ()=>(
    <div>
        <h1>Clients List</h1>
    </div>
);*/
export default ClientList;