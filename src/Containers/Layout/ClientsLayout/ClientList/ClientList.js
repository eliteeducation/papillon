/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import ReactTable from 'react-table';
import {Card} from "reactstrap";
import "react-table/react-table.css";

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
                {
                    Header: "Name",
                    columns: [
                        {
                            Header: "First Name",
                            accessor: "firstName"
                        },
                        {
                            Header: "Last Name",
                            id: "lastName",
                            accessor: d => d.lastName
                        }
                    ]
                },
                {
                    Header: "Info",
                    columns: [
                        {
                            Header: "Teléphone",
                            accessor: "telOne"
                        },
                        {
                            Header: "Email",
                            accessor: "email"
                        }
                    ]
                },
                {
                    Header: "Stats",
                    columns: [
                        {
                            Header: "Visits",
                            accessor: "visits"
                        }
                    ]
                }
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
        const {rows, columns} = this.state;
        return (
            <Card>
                <ReactTable
                    data={rows}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={row => {
                        return (
                            <div style={{padding: "20px"}}>
                                <em>
                                    TODO !

                                </em>
                                <ReactTable
                                    data={row.students}
                                    columns={columns}
                                    defaultPageSize={3}
                                    showPagination={false}
                                    SubComponent={row => {
                                        return (
                                            <div style={{padding: "20px"}}>
                                                Nom : {row.firstName}
                                            </div>
                                        );
                                    }}
                                />

                            </div>
                        );
                    }}
                >

                </ReactTable>
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