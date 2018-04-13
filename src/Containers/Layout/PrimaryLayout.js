/**
 * Created by eblonvia on 20/03/2018.
 */
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import ClientsLayout from "./ClientsLayout/";
import TeachersLayout from "./TeachersLayout/";
import Header from "../Header/";


const PrimaryLayout = ({match}) => {
    console.log("PrimaryLayout : ", match)
    return (<div className="primary-layout">
        <Header />
        <div className="container-fluid">

                <Switch>

                    <Route path={`${match.path}/clients`} component={ClientsLayout}/>
                    <Route path={`${match.path}/teachers`} component={TeachersLayout}/>
                    <Redirect to={`${match.path}/`}/>
                </Switch>

        </div>
    </div>)
}

export default PrimaryLayout;