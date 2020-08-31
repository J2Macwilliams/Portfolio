import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import theme from './theme';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				<CSSReset />
				<App />
			</ColorModeProvider>
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
