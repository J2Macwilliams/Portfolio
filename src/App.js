import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import NavBar from './NavBar';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
