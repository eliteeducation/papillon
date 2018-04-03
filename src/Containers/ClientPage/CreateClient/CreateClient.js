/**
 * Created by emma on 06/03/18.
 */
import React from 'react';

const CreateClient =()=> (
    <form>
        <div className="form-group">
            <label for="lastName">Nom du client</label>
            <input type="text" className="form-control" id="lastName"  placeholder="Nom de famille"/>
            <label for="firstName">Prénom</label>
            <input type="text" className="form-control" id="firstName"  placeholder="Prénom"/>
        </div>

        <div className="form-group">
            <label for="emailAddress">Email address</label>
            <input type="email" className="form-control" id="emailAddress" placeholder="Saisir l'adresse email"/>
        </div>

        <div className="form-group">
            <label for="phoneNumber">Numéro de téléphone</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="Numéro de téléphone"/>
        </div>
        <div className="form-group">
            <label for="phoneNumber2">Numéro de téléphone</label>
            <input type="text" className="form-control" id="phoneNumber2" placeholder="Numéro de téléphone 2"/>
        </div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Complément d'infos</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
);

export default CreateClient;