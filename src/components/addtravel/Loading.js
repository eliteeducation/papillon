import React  from 'react';
import './Loading.css';
import PropTypes from 'prop-types';
var classNames = require('classnames')
var Glyphicon = require('react-bootstrap/lib/Glyphicon')


class Loading extends React.Component {
    constructor(props) {
        super(props)

        props.delay = 500;
        props.inline = false;

        this.state = {
            delaying: !!this.props.delay
        }
    }


    componentDidMount() {
        if (this.props.delay) {
            this.timeout = setTimeout(this.handleDisplay, this.props.delay)
        }
    }


    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    }


    handleDisplay() {
        this.timeout = null
        this.setState({delaying: false})
    }


    render() {
        var {delay, inline, text} = this.props
        var {delaying} = this.state
        var className = classNames('Loading', {
            'Loading--delaying': delaying,
            'Loading--displaying': delay && !delaying,
            'Loading--inline': inline
        })
        return <div className={className}>
            <Glyphicon glyph="refresh"/>
            {text && <div className="Loading__text">{text}&hellip;</div>}
        </div>
    }
}
;

Loading.propTypes = {
    delay: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    inline: PropTypes.bool,
    text: PropTypes.string
}
export default Loading;