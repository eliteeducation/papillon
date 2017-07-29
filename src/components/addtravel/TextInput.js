import React  from 'react';
import PropTypes from 'prop-types';

var FormField = require('./FormField')

class TextInput extends React.Component {

    shouldComponentUpdate() {
        return FormField.shouldFormFieldUpdate;

    }

    render() {
        var {field, help, label, onChange, ...inputProps} = this.props
        return <FormField field={field} help={help} inputProps={inputProps} label={label}>
            <input
                {...inputProps}
                className="form-control"
                name={field.name}
                onBlur={field.onBlur}
                onChange={onChange && field.onChange}
            />
        </FormField>
    }
}
TextInput.propTypes = {
    field: PropTypes.object.isRequired
};
export default TextInput