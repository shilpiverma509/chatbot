import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import reducers from './reducer/index';
import ReduxPromise from "redux-promise";

const initialState={}
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider  store={createStoreWithMiddleware	(reducers,initialState)}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
    </Provider>
		, document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
