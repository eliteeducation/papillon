import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './font-awesome/css/font-awesome.min.css';
import {Tabs, Tab} from '../node_modules/react-bootstrap/lib'

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
                <div>
                    <div class="tab-pane fade in show active" id="panel-clients" role="tabpanel">

                        <p>Onglet 1 - Partie Clients</p>

                        <div class="container-fluid">


                            <form class="form-inline">

                                <div class="md-form form-group">
                                    <i class="fa fa-search prefix"></i>
                                    <input type="email" id="searchinput" class="form-control validate"/>
                                        <label for="searchinput" data-error="wrong" data-success="right">Recherche
                                            clients</label>
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-deep-purple">OK</button>
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-blue-grey">Nouveau Client</button>
                                </div>

                            </form>
                        </div>

                        <hr/>
                        <div class="col-md-7">

                            <div id="master-info-client">
                                <form class="form-inline">
                                    <label class="sr-only" for="nom-client">Nom</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="nom-client"
                                               placeholder="Nom"/>
                                    </div>
                                    <label class="sr-only" for="prenoms-client">Prénoms</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="prenoms-client"
                                               placeholder="Prénoms"/>
                                    </div>


                                    <div class="input-group ">
                                        <div class="input-group-addon">
                                            <i class="fa fa-phone-square prefix"></i>
                                        </div>
                                        <input type="text" class="form-control" id="telephone-1"
                                               placeholder="Téléphone 1"/>
                                    </div>


                                    <div class="input-group ">
                                        <div class="input-group-addon">
                                            <i class="fa fa-phone-square prefix"></i>
                                        </div>
                                        <input type="text" class="form-control" id="telephone-2"
                                               placeholder="Téléphone 2"/>
                                    </div>

                                    <div id="plus">
                                        <a href="#detail-info-client" role="button" data-toggle="collapse"
                                           aria-expanded="false" aria-controls="detail-info-client">
                                            <i class="fa fa-plus-circle"></i>
                                        </a>
                                    </div>
                                    <div class="text-center">

                                        <button id="enregister-client-btn" type="submit" class="btn btn-indigo">
                                            Enregistrer
                                        </button>
                                    </div>
                                </form>

                            </div>


                            <div id="detail-info-client" class="collapse">


                                <div id="card-detail" class="card ">
                                    <div class="card-block">

                                        <div class="card-header indigo">
                                            <h3><i class="fa fa-user"></i>
                                                <span class="white-text"> Détails client:</span></h3>
                                        </div>

                                        <div class="md-form">
                                            <label for="exampleTextarea">Adresse</label>
                                            <textarea class="form-control" id="exampleTextarea" rows="3"
                                                      placeholder=""></textarea>
                                        </div>

                                        <div class="md-form">
                                            <i class="fa fa-user fa-fw"></i>
                                            <input type="text" id="form3" class="form-control"/>
                                        </div>
                                        <div class="md-form">
                                            <i class="fa fa-envelope fa-fw"></i>
                                            <input type="text" id="form2" class="form-control" placeholder="Email"/>
                                                <label for="form2"></label>
                                        </div>

                                        <div class="md-form">
                                            <i class="fa fa-lock fa-fw"></i>
                                            <input type="password" id="form4" class="form-control"
                                                   placeholder="Password"/>
                                                <label for="form4"></label>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
    );
    }
    };


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