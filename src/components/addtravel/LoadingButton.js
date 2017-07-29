import React  from 'react';
import PropTypes from 'prop-types';
import './LoadingButton.css'

var Button = require('react-bootstrap/lib/Button')

var Loading = require('./Loading')

class LoadingButton extends React.Component{

    render() {
        var {icon, label, loading, loadingLabel, ...props} = this.props;
        if (!loadingLabel) {
            loadingLabel = `${label}ing`
        }
        return <Button disabled={loading} {...props}>
            {loading
                ? <span><Loading inline delay={false}/> {icon && <img src={icon} className="LoadingButton__icon" alt="label-image0"/>} {loadingLabel}&hellip;</span>
                : <span>{icon && <img src={icon} className="LoadingButton__icon" alt="label-image"/>} {label}</span>
            }
        </Button>
    }
}

LoadingButton.propTypes={
    label: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        icon: PropTypes.string,
        // Defaults to label + 'ing' if not provided
        loadingLabel: PropTypes.string
}
export default LoadingButton;