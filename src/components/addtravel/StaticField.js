var React = require('react')

var FormField = require('./FormField')

class StaticField extends React.Component
{

    shouldComponentUpdate(nextProps)
    {
        return (this.props.label !== nextProps.label ||
        this.props.value !== nextProps.value)
    }

    render()
    {
        var {label, value} = this.props;
        return <FormField inputClass="form-control-static" label={label}>{value}</FormField>
    }
}
;

export default StaticField;