import './Help.css';
import PropTypes from 'prop-types';
import React,{Component}  from 'react';
var Glyphicon = require('react-bootstrap/lib/Glyphicon')
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger')

var Tooltip = require('react-bootstrap/lib/Tooltip')

class Help extends Component {

    render() {
        var tooltip = <Tooltip>{this.props.text}</Tooltip>
        return (
        <OverlayTrigger overlay={tooltip} delayShow={300} delayHide={150}>
            <Glyphicon className="Help" glyph="question-sign"/>
        </OverlayTrigger>
        );
    }
}
Help.propTypes ={
    text: PropTypes.string.isRequired
}
export default Help;