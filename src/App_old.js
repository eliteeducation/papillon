import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };

    }

    handleSelect(key) {
        console.log("onglet cliqué : ", key)
        this.setState({key});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <ul className="nav nav-tabs tabs-3 indigo" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#panel-clients" role="tab">
                            <i
                                className="fa fa-user"></i>
                            Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#panel-enseigants" role="tab">
                            <i className="fa fa-heart"></i>
                            Enseigants</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#panel7" role="tab">
                            <i
                                className="fa fa-envelope"></i>
                            Commerciaux</a>
                    </li>
                </ul>

                <div className="tab-content">

                    <div className="tab-pane fade in show active" id="panel-clients" role="tabpanel">

                        <p>Onglet 1 - Partie Clients</p>

                        <div className="container-fluid">
                            <form className="form-inline">

                                <div className="md-form form-group">
                                    <i className="fa fa-search prefix"></i>
                                    <input type="email" id="searchinput" className="form-control validate"/>
                                    <label for="searchinput" data-error="wrong" data-success="right">Recherche
                                        clients</label>
                                </div>


                                <div className="text-center">
                                    <button className="btn btn-deep-purple">OK</button>
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-blue-grey">Nouveau Client</button>
                                </div>

                            </form>
                        </div>

                        <hr/>

                        <div className="col-md-7">
                            <RegisterForm/>

                            <div id="detail-info-client" className="collapse">
                                <DefailForm/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
;


const DefailForm = ()=> {

    return (    <div id="card-detail" className="card ">
        <div className="card-block">
            <div className="card-header indigo">
                <h3><i className="fa fa-user"></i><span className="white-text"> Détails client:</span>
                </h3>
            </div>
            <div className="md-form">
                <label for="exampleTextarea">Adresse</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"
                          placeholder="">

                                                </textarea>
            </div>

            <div className="md-form">
                <i className="fa fa-user fa-fw"></i>
                <input type="text" id="form3" className="form-control"/>
            </div>
            <div className="md-form">
                <i className="fa fa-envelope fa-fw"></i>
                <input type="text" id="form2" className="form-control"
                       placeholder="Email"/>
                <label for="form2"></label>
            </div>

            <div className="md-form">
                <i className="fa fa-lock fa-fw"></i>
                <input type="password" id="form4" className="form-control"
                       placeholder="Password"/>
                <label for="form4"></label>
            </div>


        </div>
    </div>);
};
const RegisterForm = ()=> {


    return (
        <div id="master-info-client">
        <form className="form-inline">
            <label className="sr-only" for="nom-client">Nom</label>
            <div className="input-group">
                <input type="text" className="form-control" id="nom-client"
                       placeholder="Nom"/>
            </div>

            <label className="sr-only" for="prenoms-client">Prénoms</label>
            <div className="input-group">
                <input type="text" className="form-control" id="prenoms-client"
                       placeholder="Prénoms"/>
            </div>


            <div className="input-group ">
                <div className="input-group-addon">
                    <i className="fa fa-phone-square prefix"></i>
                </div>
                <input type="text" className="form-control" id="telephone-1"
                       placeholder="Téléphone 1"/>
            </div>

            <div className="input-group ">
                <div className="input-group-addon">
                    <i className="fa fa-phone-square prefix"></i>
                </div>
                <input type="text" className="form-control" id="telephone-2"
                       placeholder="Téléphone 2"/>
            </div>

            <div id="plus">
                <a href="#detail-info-client" role="button" data-toggle="collapse"
                   aria-expanded="false" aria-controls="detail-info-client">
                    <i className="fa fa-plus-circle"></i>
                </a>
            </div>
            <div className="text-center">

                <button id="enregister-client-btn" type="submit"
                        className="btn btn-indigo">Enregistrer
                </button>
            </div>
        </form>

    </div>)

}


export default App;