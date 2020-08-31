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
				p='10% 7%'
				background={
					colorMode === 'light'
						? 'linear-gradient(211deg, rgba(255,255,255,1) 0%, rgba(227,227,227,1) 100%)'
						: 'linear-gradient(211deg, rgba(0,0,0,1) 0%, rgba(71,71,71,1) 100%)'
				}
			>
				
				{/* <Box
				p='0 2%'
				textAlign='center'
				> */}
					<Switch>
						<Route path='/projects'>
							<Projects />
						</Route>
						<Route path='/about'>
							<Contact />
						</Route>
						<Route path='/'>
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
