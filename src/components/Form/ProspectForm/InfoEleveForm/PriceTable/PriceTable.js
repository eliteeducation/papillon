/**
 * Created by emma on 25/02/18.
 */


import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {TableBody,TableCell,TableFooter,TableHead,TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import TextField from "material-ui/TextField";
import FilterListIcon from 'material-ui-icons/FilterList';
import {Classes, MatieresSeconcaire, Programme, TARIFS_SECONDAIRE_PROGRAMME_IVOIRIEN} from "Constants";
import PriceTableToolbar from './PriceTableToolbar';


let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}

const columnData = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' }
];

class EnhancedTableHead extends React.Component {

    render() {
        const { onSelectAllClick, numSelected, rowCount } = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columnData.map(column => {
                        return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? 'none' : 'default'}>
                                {column.label}
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
};




const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 800,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class PriceTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Donut', 452, 25.0, 51, 4.9),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
            ]
        };
    }

    onSetEnseignantMatiere = (nomEnseignant, matiere) => event => {

        let val = event.target.value;

        this.setState((prevState, props) => {
            return {
                [nomEnseignant]: Object.assign({}, prevState[nomEnseignant], {[matiere]: val})
            }

        });
    };
    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState({ selected: this.state.data.map(n => n.id) });
            return;
        }
        this.setState({ selected: [] });
    };

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.setState({ selected: newSelected });
    };


    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { classes,nomEnseignantEE ,matieresSelectionnees} = this.props;
        const {  selected } = this.state;
        let matieres = matieresSelectionnees.length===0 ?undefined:   MatieresSeconcaire.filter(element=>matieresSelectionnees.indexOf(element.value)>=0)
        return (
            <Paper className={classes.root}>
                <PriceTableToolbar numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        {    matieres !== undefined && matieres.length > 0 &&
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={this.handleSelectAllClick}
                            rowCount={matieresSelectionnees.length}/>
                        }
                        {    matieres!==undefined && matieres.length>0 &&
                        <TableBody>
                            {matieres.map(mat => {
                                const isSelected = this.isSelected(mat.code);

                                return (
                                    <TableRow hover role="checkbox" selected={isSelected} tabIndex={-1} key={mat.code}
                                              aria-checked={isSelected}>
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isSelected} onChange={event => this.handleClick(event, mat.code)} />
                                        </TableCell>
                                        <TableCell padding="none">
                                            <TextField label="Enseignant E.E."
                                                       value={nomEnseignantEE ? nomEnseignantEE[mat.code] : ''}
                                                       onChange={this.onSetEnseignantMatiere('nomEnseignantEE', mat.code)}/></TableCell>
                                        <TableCell >{mat.value}</TableCell>
                                        <TableCell >{mat.type}</TableCell>
                                    </TableRow>
                                );
                            })}

                        </TableBody>}
                        <TableFooter>
                            <TableRow>

                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        );
    }
}

PriceTable.propTypes = {
    classes: PropTypes.object.isRequired,
    matieresSelectionnees: PropTypes.array.isRequired,
};

export default withStyles(styles)(PriceTable);
