/**
 * Created by emma on 15/04/18.
 */
import React from "react";
import PropTypes from "prop-types";
//import {saveStudent} from "../../../../lib/database";


class CreateStudent extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    constructor(props) {
        super(props);


    }

    onSubmit = (event)=> {
        event.preventDefault();
        let {onSaveStudent} =this.props;
        onSaveStudent(this.state)(event);
        this.setState({})
    }

    render() {
        let {matieres}= this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input name="lastName" onChange={this.handleChange('lastName')} type="text"
                                   className="form-control" id="lastName" placeholder="Nom de famille de l'enfant"/>
                        </div>
                        <div className="form-group">
                            <input name="firstName" onChange={this.handleChange('firstName')} type="text"
                                   className="form-control" id="firstName" placeholder="Prénom de l'enfant"/>
                        </div>
                        <div className="form-group">
                            <input name="email" onChange={this.handleChange('email')} type="email"
                                   className="form-control" id="emailAddress" placeholder="Addresse email de l'enfant"/>
                        </div>
                        <div className="form-group">
                            <input name="childTelOne" onChange={this.handleChange('telOne')} type="text"
                                   className="form-control" id="telOne" placeholder="Téléphone 1 de l'enfant"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="selectMatieres">matières souhaitées</label>
                            <select name="matieresSelectionnees" onChange={this.handleChange('matieresSelectionnees')}
                                    multiple className="form-control" id="matieresSelectionnees">
                                {matieres.map(mat=>(<option key={mat.value} value={mat.value}>{mat.value}</option>))}
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={this.onSubmit} className="btn btn-primary">Save changes
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateStudent.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    onSaveStudent: PropTypes.func.isRequired,
    matieres: PropTypes.array.isRequired,

}

export default CreateStudent;