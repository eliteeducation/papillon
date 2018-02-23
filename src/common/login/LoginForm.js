/**
 * Created by emma on 22/08/17.
 */

import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const {onLogin, classes} = this.props;
        return (

            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <TextField
                    onChange={(event, newValue) => this.setState({username: newValue})}
                />
                <br/>
                <TextField
                    type="password"
                    onChange={(event, newValue) => this.setState({password: newValue})}
                />
                <br/>
                <Button variant="raised" color="secondary" style={style} onClick={onLogin}>
                    Submit
                </Button>
            </div>


        );
    }
}

const style = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(LoginForm);
