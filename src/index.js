import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';


const rootReducer = combineReducers({

    form: formReducer
})

const store = createStore(rootReducer);

const lighthme = {
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,

        contrastThreshold: 3,

        tonalOffset: 0.2
    }
}


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lighthme)}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
