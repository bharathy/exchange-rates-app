import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './components/root';
import rateReducer from './reducers/rates';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const init = () => {
	const initialState = {
		date: new Date(),
		currency: "INR",
		rates: []
	};
	const store = createStoreWithMiddleware(rateReducer, initialState);

	ReactDOM.render(
		<Root store={ store } />,
		document.getElementById('app')
	);
}

module.hot.accept();
