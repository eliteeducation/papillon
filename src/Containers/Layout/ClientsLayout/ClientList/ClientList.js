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

    /*TODO changer le second columns pour l'adapter au besoin du sous composant*/
    render() {
        const {rows, columns} = this.state;
        return (
            <Card>
                <ReactTable
                    data={rows}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={RowDetail (columns)}>
                   
                </ReactTable>
            </Card>
        );
    }
}

const RowDetail =  columns => row => {
    let students = row.original.students;
    if (students) {
        return (
            <div style={{padding: "20px"}}>
                <em>
                    Enfants :
                </em>
                {students &&
                <ReactTable
                    data={Object.keys(students).map(key => students[key])}
                    columns={columns}
                    defaultPageSize={3}
                    showPagination={false}
                />
                }

            </div>
        );
    }

    return <div>Pas d'enfants inscrits pour le moment !</div>
};


export default ClientList;