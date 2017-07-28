import './Help.css';

var Glyphicon = require('react-bootstrap/lib/Glyphicon')
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger')
import {Component}  from 'react';
var Tooltip = require('react-bootstrap/lib/Tooltip')

class Help extends Component {

    render() {
        var tooltip = <Tooltip>{this.props.text}</Tooltip>
        return <OverlayTrigger overlay={tooltip} delayShow={300} delayHide={150}>
            <Glyphicon className="Help" glyph="question-sign"/>
        </OverlayTrigger>
    }
}
Help.propTypes ={
    text: React.PropTypes.string.isRequired
}
module.exports = Help