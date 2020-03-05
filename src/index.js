import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import "./index.css"
import Routes from './Routes'
import reducers from './reducers';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import App from './App'

const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(reducers, middleware));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
	<Routes />
</Provider>
, document.getElementById('root'));