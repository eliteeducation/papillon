import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";



const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer);

const Main  = ()=> (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(<Main/>,
    document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
