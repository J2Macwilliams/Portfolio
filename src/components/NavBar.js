import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { Icon, useColorMode, Box } from '@chakra-ui/core';
import '../App.css';
const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	useEffect(() => {
		gsap.from('.darkMode', 3, {
			opacity: 1,
			x: -800,
			rotate: 900,
			ease: 'bounce.out',
		});
	}, []);

	return (
		<Box
			w='100%'
			position='fixed'
			zIndex='1'
			bg={colorMode === 'light' ? 'white' : 'black'}
			
		>
			<Box p={[1, 2, 4, 4]} zIndex='1' className='navbar'>
				<NavLink
					className='navLink'
					activeClassName='activeNavButton'
					exact
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className='navLink'
					activeClassName='activeNavButton'
					exact
					to='/projects'
				>
					Projects
				</NavLink>
				<NavLink
					className='navLink'
					activeClassName='activeNavButton'
					exact
					to='/about'
				>
					About
				</NavLink>
			</Box>
			<Box p='.5%' textAlign='right'>
				<Icon
					className='darkMode'
					size='1.6rem'
					// color={colorMode === 'light' ? '#Dark' : '#FFF'}
					
					name={colorMode === 'light' ? 'moon' : 'sun'}
					onClick={toggleColorMode}
				>
					{colorMode === 'light' ? 'black' : 'white'}
				</Icon>
			</Box>
		</Box>
	);
};

export default NavBar;
