/**
 * Created by eblonvia on 23/02/2018.
 */


import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Input, {InputLabel} from "material-ui/Input";
import {MenuItem} from "material-ui/Menu";
import {FormControl} from "material-ui/Form";
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


class MatiereList extends React.Component {
    state = {
        values: [],
    };



    render() {
        const {classes, theme, selectedItems, matieres, handleChange} = this.props;

        return (
            <div className={classes.root}>
                <FormControl fullWidth={true} className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Choisissez une matière:</InputLabel>
                    <Select
                        multiple
                        value={selectedItems}
                        onChange={handleChange}
                        input={<Input id="select-multiple"/>}
                        MenuProps={MenuProps}>
                        {matieres.map(matiere => (
                            <MenuItem
                                key={matiere}
                                value={matiere}
                                style={{
                                    fontWeight: selectedItems.length == 0 || selectedItems.indexOf(matiere) === -1
                                        ? theme.typography.fontWeightRegular
                                        : theme.typography.fontWeightMedium,
                                }}>
                                {matiere}
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
    matieres: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    selectedItems: PropTypes.array.isRequired,
};

export default withStyles(styles, {withTheme: true})(MatiereList);