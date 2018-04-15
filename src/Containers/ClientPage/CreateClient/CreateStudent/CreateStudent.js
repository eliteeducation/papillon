/**
 * Created by emma on 15/04/18.
 */
import React from "react";
import PropTypes from 'prop-types';
//import {saveStudent} from "../../../../lib/database";


class CreateStudent  extends React.Component {
    constructor(props){
        super(props);
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }


    render() {
        let {matieres, onSaveStudent} = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input name="childLastName" onChange={this.handleChange('childLastName')} type="text"
                                   className="form-control" id="lastName" placeholder="Nom de famille de l'enfant"/>
                        </div>
                        <div className="form-group">
                            <input name="childFirstName" onChange={this.handleChange('childFirstName')} type="text"
                                   className="form-control" id="firstName" placeholder="Prénom de l'enfant"/>
                        </div>
                        <div className="form-group">
                            <input name="childEmail" onChange={this.handleChange('childEmail')} type="email"
                                   className="form-control" id="emailAddress" placeholder="Addresse email de l'enfant"/>
                        </div>
                        <div className="form-group">
                            <input name="childTelOne" onChange={this.handleChange('telOne')} type="text"
                                   className="form-control" id="telOne" placeholder="Téléphone 1 de l'enfant"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="selectMatieres">matières souhaitées</label>
                            <select multiple className="form-control" id="selectMatieres">
                                {matieres.map(mat=>(<option key={mat.value} value={mat.value}>{mat.value}</option>))}
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={onSaveStudent(this.state)}  className="btn btn-primary">Save changes</button>
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