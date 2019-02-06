import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Rates from './components/rates';
import NavBar from './components/NavBar';

export default () => {
	return (
	    <BrowserRouter>
	    	<div>
	    		<header className="bdr-btm center h-full p10 w-full"><h1>Exchange Rates App</h1></header>
		    	<NavBar/>
				<Switch>
					<Route exact path='/' component={App}/>
					<Route path='/home' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/rates' component={Rates}/>
				</Switch>
			</div>
	    </BrowserRouter>
	)
};
