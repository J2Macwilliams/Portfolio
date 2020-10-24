import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Box, useColorMode, } from '@chakra-ui/core';
import Home from './components/Home/Home';
import Projects from './components/Projects/Index';
import About from './components/Home/About';
import NavBar from './components/Bars/NavBar';
// import Footer from './components/Bars/Footer';

import './App.css';
// import { Box, makeStyles } from '@material-ui/core'

// const useStyles = makeStyles(() => ({
// 	app: {
// 		display: "flex",
// 		flexDirection: "column",
// 		// width: "100%"
// 	},
// 	//  mainBox :{
// 	// 	flex: "0 0 auto"
// 	//  }
// }));
function App() {
	// const classes = useStyles();
	// const { colorMode } = useColorMode();
	return (
		<div className='App'>
			<NavBar />
			<div className='mainBox'>
				<Switch>
					<Route path='/projects'>
						<Projects />
					</Route>
					<Route path='/skills'>
						<About />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
