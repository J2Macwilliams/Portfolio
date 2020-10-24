import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Box, CardMedia } from '@material-ui/core'

import Logo from '../../assets/J.png';
// import DarkLogo from '../assets/Jlogodark.png';
// import '../App.css';
import { useStyles, StyledMenu, StyledMenuItem } from './barStyles'



const NavBar = () => {
	const classes = useStyles();
	const { pathname } = useLocation();

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box className={classes.nav}>
			<CardMedia
				component='img'
				src={ Logo }
				aria-controls="customized-menu"
				aria-haspopup="true"
				variant="contained"
				className={ classes.navBtn }
				// color="primary"
				onClick={ handleClick }
			/>
			<StyledMenu
				id="customized-menu"
				anchorEl={ anchorEl }
				keepMounted
				open={ Boolean(anchorEl) }
				onClose={ handleClose }
			>

				<StyledMenuItem>
					<NavLink
						className='navLink'
						activeClassName='activeNavButton'
						exact
						to='/'
					>
						Home
				</NavLink>
				</StyledMenuItem>
				<StyledMenuItem>
					<NavLink
						className='navLink'
						activeClassName='activeNavButton'
						isActive={ () => ['/projects', '/projects/frontEnd'].includes(pathname) }
						to="projects"
					>
						Projects
				</NavLink>
				</StyledMenuItem>
			</StyledMenu>
		</Box>
	);
};

export default NavBar;
