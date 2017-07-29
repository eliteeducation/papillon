import React  from 'react';
import PropTypes from 'prop-types';
var DateTimePicker = require('react-widgets/lib/DateTimePicker')

var FormField = require('./FormField')

class DateInput extends React.Component {


    render() {
        let {field, help, label, afterChange, ...inputProps} = this.props;
        let onChange = field.onChange
        if (afterChange) {
            onChange = function (...args) {
                field.onChange(...args)
                afterChange(...args)
            }
        }
        return <FormField field={field} help={help} inputProps={inputProps} label={label}>
            <DateTimePicker
                {...inputProps}
                format="dd/MM/yyyy"
                name={field.name}
                onChange={onChange}
                time={false}
                value={field.value}
            />
        </FormField>
    }
}
DateInput.propTypes = {
    field: PropTypes.object.isRequired
};

DateInput.shouldComponentUpdate = FormField.shouldFormFieldUpdate;
    export default DateInput;