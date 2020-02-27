import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Projects from './components/Projects/index';
import Skills from './components/Skills/index';
import Contact from './components/Contact/index';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/skills'>
					<Skills />
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
