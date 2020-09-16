import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box, useColorMode } from '@chakra-ui/core';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/About';

import './App.css';
import NavBar from './components/NavBar';

import Footer from './components/Footer';

function App() {
	const { colorMode } = useColorMode();
	return (
		<div className='App'>
			<NavBar />
			<Box
				flex='1 0 auto'
				p={['40% 9% 10%','36% 9% 10%','28% 9% 10%','15% 9% 1%']}
				
				background={colorMode === 'light' ? '#f2f2f2' : '#363636'}
			>
				<Switch>
					<Route path='/projects'>
						<Projects />
					</Route>
					<Route path='/about'>
						<Contact />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
				{/* </Box> */}
			</Box>

			<Footer />
		</div>
	);
}

export default App;
