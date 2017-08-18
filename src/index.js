import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Provider}  from 'react-redux';

import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({

    form: formReducer
})

const store = createStore(rootReducer);




ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
