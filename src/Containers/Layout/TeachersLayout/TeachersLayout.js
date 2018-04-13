/**
 * Created by eblonvia on 20/03/2018.
 */


import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import TeachersList from "../../TeachersList/";
import TeacherCreate from "../../TeacherCreate/";
import TeachersNav from "../../Layout/TeachersLayout/TeachersNav";


const TeachersLayout = ({ match }) => (
    <div className="primary-layout">
        <TeachersNav />
        <main>
            <Switch>
                <Route path={`${match.path}/create`} component={TeacherCreate}/>
                <Route path={`${match.path}/`} component={TeachersList}/>
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default TeachersLayout