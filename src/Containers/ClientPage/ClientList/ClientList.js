/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import Paper from "material-ui/Paper";
import {GroupingState, IntegratedGrouping} from "@devexpress/dx-react-grid";
import {Grid, Table, TableHeaderRow, TableGroupRow} from "@devexpress/dx-react-grid-bootstrap3";
class ClientList extends React.Component {
    constructor(props) {
        super(props);

        props.clients.once('value', snapshot=> {
            let rows = []
            snapshot.forEach((data)=> {

                rows.push(data.val());

            });
            this.setState({rows})
        })

        props.clients.on('value', snapshot=> {
            let rows = []
            snapshot.forEach((data)=> {

                rows.push(data.val());

            });
            this.setState({rows})
        });
        this.state = {
            columns: [
                {name: 'firstName', title: 'Nom De Famille'},
                {name: 'email', title: 'Adresse Email'},
                {name: 'quartier', title: 'Quartier'},
                {name: 'commune', title: 'Commune'},
            ],
            rows: []
            /*  rows: [
             {
             commune: "Koumassi",
             email: "emmanuel.blonvia@gmail.com",
             firstName: "ZAGADOU",
             quartier: "remblais",
             telOne: "6"
             }
             ,
             {
             commune: "MArcory",
             email: "emmanuel.blonvia@gmail.com",
             firstName: "Coffi",
             quartier: "Sainte Théres",
             telOne: "6"
             }
             ,

             {
             commune: "2",
             email: "eblonvia@zaza.fr",
             firstName: "dqsd",
             floorNumber: "4",
             houseNumber: "180 avenue de la division Leclerc"
             }
             ,
             {
             commune: "2",
             email: "eblonvia@cie.fr",
             firstName: "Kessy",
             floorNumber: "8",
             houseNumber: "180 avenue de la division Leclerc",
             }                ,
             {
             commune: "2",
             email: "eblonvia@cie.fr",
             firstName: "Kessy",
             floorNumber: "8",
             houseNumber: "180 avenue de la division Leclerc"
             }
             ,
             {
             commune: "1", email: "gfdg@toto.fr", firstName: "dsfq", floorNumber: "gdh", houseNumber: "gdh"
             }
             ]*/
        }
        ;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("prev state : ", prevState)
        let rows = []
        nextProps.clients.once('value', snapshot=> {
            snapshot.forEach((data)=> {
                rows.push(data.val());

            });
        })

        return {
            rows: rows,
            columns: prevState.columns
        }
    }

    render() {
        const {rows, columns} = this.state;
        console.log("in the render : ", rows)
        return (

            <Paper>
                <Grid

                    rows={rows}
                    columns={columns}>
                    <GroupingState
                        grouping={[{columnName: 'commune'}]}
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