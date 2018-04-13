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
                                <input name="lastName" onChange={this.handleChange('lastName')} type="text" className="form-control" id="lastName" placeholder="Nom de famille"/>
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
                        <div className="col-sm-6  mt-3">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-primary" data-toggle="modal" data-target="#modal" aria-expanded="true" aria-controls="collapseOne">
                                               Ajouter enfant
                                            </button>
                                        </h5>
                                    </div>

                                    <div class="modal fade" id="modal">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Ajouter un enfant</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-md-12 mt-3">
                                                                <div className="form-group">
                                                                    <input name="childLastName" onChange={this.handleChange('childLastName')} type="text" className="form-control" id="lastName" placeholder="Nom de famille de l'enfant"/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input name="childFirstName" onChange={this.handleChange('childFirstName')} type="text" className="form-control" id="firstName" placeholder="Prénom de l'enfant"/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input name="childEmail" onChange={this.handleChange('childEmail')} type="email" className="form-control" id="emailAddress" placeholder="Addresse email de l'enfant"/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input name="childTelOne" onChange={this.handleChange('telOne')}  type="text" className="form-control" id="telOne" placeholder="Téléphone 1 de l'enfant"/>
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="exampleFormControlSelect2">matières souhaitées</label>
                                                                    <select multiple class="form-control" id="exampleFormControlSelect2">
                                                                        <option>Anglais</option>
                                                                        <option>Français</option>
                                                                        <option>Math</option>
                                                                        <option>Physique</option>
                                                                        <option>ESpagnol</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-primary collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Collapsible Group Item #2
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

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