/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import {Grid, Table, TableHeaderRow, TableRowDetail} from "@devexpress/dx-react-grid-bootstrap4";
import {RowDetailState} from "@devexpress/dx-react-grid";
import ReactTable from 'react-table';
import {Card} from "reactstrap";

class ClientList extends React.PureComponent {
    constructor(props) {
        super(props);
        props.clients.once('value', snapshot => {
            let rows = []
            snapshot.forEach((data) => {
                rows.push(data.val());
            });
            this.setState({rows})
        })

        props.clients.on('value', snapshot => {
            let rows = []
            snapshot.forEach((data) => {

                rows.push(data.val());

            });
            this.setState({rows})
        });
        this.state = {
            columns: [
                {name: 'lastName', title: 'Famille'},
                {name: 'commune', title: 'Commune'},
                {name: 'email', title: 'Adresse Email'},
                {name: 'quartier', title: 'Quartier'},
            ],
            rows: [],
            expandedRowIds: [2, 5],
        }
        ;
        this.changeExpandedDetails = expandedRowIds => this.setState({expandedRowIds});
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("prev state : ", prevState)
        let rows = []
        nextProps.clients.once('value', snapshot => {
            snapshot.forEach((data) => {
                rows.push(data.val());

            });
        })

        return {
            rows: rows,
            columns: prevState.columns
        }
    }


    render() {
        const {rows, columns, expandedRowIds} = this.state;

        return (

            <Card>
                <Grid
                    rows={rows}
                    columns={columns}>
                    <RowDetailState
                        expandedRowIds={expandedRowIds}
                        onExpandedRowIdsChange={this.changeExpandedDetails}
                    />
                    <Table/>
                    <TableHeaderRow/>
                    <TableRowDetail
                        contentComponent={RowDetail}
                    />
                </Grid>
            </Card>
        );
    }
}

const RowDetail = ({row}) => {
        if (row.students) {
            return Object.keys(row.students).map(key => {
                    let stud = row.students[key];
                    return <div key={key}>Details for {stud.firstName} from {stud.email}</div>
                }
            );
        }
        return <p> pas d'enfant scolarisé pour le moment</p>
    }
;


export default ClientList;