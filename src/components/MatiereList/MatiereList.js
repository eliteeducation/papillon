/**
 * Created by eblonvia on 23/02/2018.
 */


import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Input, {InputLabel} from "material-ui/Input";
import {MenuItem} from "material-ui/Menu";
import {FormControl} from "material-ui/Form";
import {ListItemText} from "material-ui/List";
import Select from "material-ui/Select";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

class MatiereList extends React.Component {
    state = {
        name: [],
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Name</InputLabel>
                    <Select
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple"/>}
                        MenuProps={MenuProps}>
                        {names.map(name => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={{
                                    fontWeight: this.state.name.indexOf(name) === -1
                                        ? theme.typography.fontWeightRegular
                                        : theme.typography.fontWeightMedium,
                                }}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


            </div>
        );
    }
}

MatiereList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MatiereList);