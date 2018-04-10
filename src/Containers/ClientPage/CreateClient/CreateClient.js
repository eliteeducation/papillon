/**
 * Created by emma on 06/03/18.
 */
import React from 'react';
import {clients} from '../../../lib/database'
class CreateClient extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    saveClient =(event) => {
      //  Object.keys(this.state).forEach(key=>)
        event.preventDefault();
        clients.push(this.state)
    }

    render() {
        return (
            <form onSubmit={this.saveClient}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 mt-3">

                            <div className="form-group">
                                <input type="text" className="form-control" id="lastName" placeholder="Nom de famille"/>
                            </div>
                            <div className="form-group">
                                <input name="firstName" onChange={this.handleChange('firstName')} type="text" className="form-control" id="firstName" placeholder="Prénom"/>
                            </div>
                            <div className="form-group">
                                <input name="email" onChange={this.handleChange('email')} type="email" className="form-control" id="emailAddress" placeholder="Addresse email"/>
                            </div>
                            <div className="form-group">
                                <input name="telOne" onChange={this.handleChange('telOne')}  type="text" className="form-control" id="telOne" placeholder="Téléphone 1"/>
                            </div>
                            <div className="form-group">
                                <input name="telTwo" onChange={this.handleChange('telTwo')}   type="text" className="form-control" id="telTwo" placeholder="Téléphone 2"/>
                            </div>
                            <div className="form-group">
                                <input  name="telTree" onChange={this.handleChange('telTree')} type="text" className="form-control" id="telTree" placeholder="Téléphone 3"/>
                            </div>
                        </div>


                        <div className="col-sm-6 col-lg-3 mt-3">
                            <div className="form-group">
                                <select name="commune" onChange={this.handleChange('commune')} defaultValue={-1} className="form-control" id="commune">
                                    <option value={-1} >Saisir la commune</option>
                                    <option value={0}>Koumassi</option>
                                    <option value={1}> 2 Plateaux</option>
                                    <option value={2}>Angré </option>
                                    <option value={3}></option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input name="quartier" onChange={this.handleChange('quartier')} type="text" className="form-control" id="quartier"
                                       placeholder="Nom du Quartier ou Résidence"/>
                            </div>
                            <div className="form-group">
                                <input name="houseNumber" onChange={this.handleChange('houseNumber')} type="text" className="form-control" id="quartier"
                                       placeholder="Numéro Villa ou Appartement"/>
                            </div>
                            <div className="form-group">
                                <input name="floorNumber" onChange={this.handleChange('floorNumber')} type="text" className="form-control" id="floorNumber" placeholder="Etage"/>
                            </div>
                            <div className="form-group">
                                <textarea name="localisationDetails" onChange={this.handleChange('localisationDetails')} className="form-control" id="localisationDetails" rows="3"
                                          placeholder="Indication géographique complémentaires"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-3">

                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
    ;
}
export default CreateClient;