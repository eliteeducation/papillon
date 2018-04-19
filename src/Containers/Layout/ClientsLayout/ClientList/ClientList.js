/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import ReactTable from "react-table";
import {Card} from "reactstrap";
import "react-table/react-table.css";
import {Redirect} from "react-router-dom";
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
                    Header: "Famille",
                    columns: [
                        {
                            Header: "Nom du client",
                            id: "firstName",
                            accessor: data => (<a onClick={this.onClickDetail(data)} href={`/app/clients/${data.clientId}`}> {data.lastName + ' ' + data.firstName}</a>)
                        },
                        {
                            Header: "Commune",
                            accessor: "commune",

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
                        },
                        {
                            Header: "Visites effectuées",
                            accessor: "visits"
                        }
                    ]
                }
            ],
            rows: []
        }
        ;

    }
    onClickDetail = (data)=> (event)=>{
        event.preventDefault();
        this.setState({
            showClientDetail:true,
            clientData:data
        })
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
        const {rows, columns, showClientDetail,clientData} = this.state;
        if(showClientDetail===true)  {
            return <Redirect to={{pathname: `/app/clients/${clientData.clientId}`, state: clientData}}/>
        };

        const studentDataColumns = [
            {
                Header: "Informations sur les enfants",
                columns: [
                    {
                        Header: "Nom de l'élève",
                        id: "firstName",
                        accessor: data =>( data.lastName + ' ' + data.firstName)
                    },
                    {
                        Header: "Niveau",
                        id: "level",

                    },
                    {
                        Header: "Teléphone",
                        accessor: "telOne"
                    },
                    {
                        Header: "les Matières",
                        accessor: "matieres"
                    }
                ]
            }
        ];
        return (
            <Card>
                <ReactTable
                    data={rows}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={RowDetail(studentDataColumns)}>

                </ReactTable>
            </Card>
        );
    }
}

const RowDetail = columns => row => {
    let students = row.original.students;
    if (students) {
        let subTableData = Object.keys(students).map(key => students[key]);
        console.log("sub table data : ", subTableData);
        return (
            <div style={{padding: "20px"}}>
                {students &&
                <ReactTable
                    data={subTableData}
                    columns={columns}
                    defaultPageSize={subTableData.length}
                    showPagination={false}
                />
                }

            </div>
        );
    }

    return <div>Pas d'enfants inscrits pour le moment !</div>
};


export default ClientList;