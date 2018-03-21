/**
 * Created by eblonvia on 20/03/2018.
 */
import React from 'react'
import { Switch, Route, Redirect , BrowserRouter as Router} from 'react-router-dom'

import ClientsLayout from "./ClientsLayout/";
import TeachersLayout from "./TeachersLayout/";

import Header from "../Header/";


const PrimaryLayout = ({ match }) => {
    console.log("dsqffdf",match)
    return (<div className="primary-layout">
        <Header />
        <main>
            <Switch>

                <Route path={`${match.path}/clients`} component={ClientsLayout}/>
                <Route path={`${match.path}/teachers`} component={TeachersLayout}/>

              {/*  <Redirect to={`${match.url}`}/>*/}
            </Switch>
        </main>
    </div>)
}

export default PrimaryLayout;