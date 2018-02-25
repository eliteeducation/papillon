/**
 * Created by emma on 25/02/18.
 */


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

PriceTableToolbar = withStyles(toolbarStyles)(PriceTableToolbar);
