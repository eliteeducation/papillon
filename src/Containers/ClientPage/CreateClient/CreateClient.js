/**
 * Created by emma on 06/03/18.
 */
import React from "react";
import {communes, matieres, saveStudent,saveClient} from "../../../lib/database";
import CreateStudent from "./CreateStudent/";
class CreateClient extends React.Component {
    state = {
        students:[],
        clientId:''
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

   onAddStudentClick = event=>{

    }

    onSaveStudent = data => event=>{
        event.preventDefault();
        let {parentId} = this.state;
        if (!parentId) {
            parentId = saveClient(this.state);
        }

        saveStudent(parentId, data)


    }


    onSaveClient = (event) => {
        event.preventDefault();
        this.state.clientId =saveClient(this.state)
    }

    render() {

        return (
            <form onSubmit={this.onSaveClient}>
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
                                    {communes.map((commune)=><option key={commune.key} value={commune.nom}>{commune.nom}</option>)}
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
                        <div className="col-lg-6 mt-3">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button type="button" onClick={this.onAddStudentClick} className="btn btn-primary" data-toggle="collapse" data-target="#childDetails" aria-expanded="true" aria-controls="collapseOne">
                                               Ajouter enfant
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="childDetails" className="collapse" aria-labelledby="headingTwo" >
                                        <div className="card-body">
                                            <CreateStudent onSaveStudent={this.onSaveStudent}  matieres={matieres} />
                                        </div>
                                    </div>

                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button type="button" className="btn btn-primary collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Collaps ible Group Item #2
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Enregistrer client</button>
            </form>
        )
    }
    ;
}
export default CreateClient;