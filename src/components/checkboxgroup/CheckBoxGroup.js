import React from 'react';

class CheckboxGroup extends React.Component {

    checkboxGroup() {
        let {label, required, options, input, meta} = this.props;

        return ( <div class="row">
                { options.map((option, index) => {
            return (

                    <label key={index}>
                        <input type="checkbox"
                               name={`${input.name}[${index}]`}
                               value={option.name}
                               checked={input.value.indexOf(option.name) !== -1}
                               onChange={(event) => {
                                   const newValue = [...input.value];
                                   if (event.target.checked) {
                                       newValue.push(option.name);
                                   } else {
                                       newValue.splice(newValue.indexOf(option.name), 1);
                                   }

                                   return input.onChange(newValue);
                               }}/>
                        {option.name}
                    </label>

                )
        }

        )}
        </div>
        );
    }

    render() {
        return (
            <div>
                {this.checkboxGroup()}
            </div>
        )
    }
}


export default CheckboxGroup;