/**
 * Created by emma on 25/02/18.
 */
import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Adjust from 'material-ui-icons/Adjust';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { lighten } from 'material-ui/styles/colorManipulator';

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
            color: theme.palette.secondary.dark,
            backgroundColor: lighten(theme.palette.secondary.light, 0.4),
        }
            : {
            color: lighten(theme.palette.secondary.light, 0.4),
            backgroundColor: theme.palette.secondary.dark,
        },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});

let PriceTableToolbar = props => {
    const { numSelected, classes } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected ===2
            })}>
            <div className={classes.title}>
                {numSelected === 2 ? (
                    <Typography variant="title">Créer un module ?</Typography>
                ) : (
                    <Typography variant="title">Les Prix</Typography>
                )}
            </div>
            <div className={classes.spacer}/>
            <div className={classes.actions}>
                {numSelected ===2 && (
                    <Tooltip title="Créer module">
                        <Button>
                            <IconButton aria-label="Delete">
                                <Adjust />
                            </IconButton>
                        </Button>
                    </Tooltip>
                ) }
            </div>
        </Toolbar>
    );
};

PriceTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(PriceTableToolbar);
