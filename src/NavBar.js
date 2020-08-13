import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Link, Icon, useColorMode, Flex, Box } from '@chakra-ui/core';

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	// First, create an alias for breakpoints
	
	return (
		<Menu >
            <Box bg={colorMode === 'light' ?'teal.800': 'orange.100'} p={[2,4,,6,8]}>
			<Flex justify='space-around' align='center'>
				<Link as={NavLink} color={colorMode === 'light' ? 'white' : 'orange.600'}  exact to='/'>
					Home
				</Link>
				<Link as={NavLink} color={colorMode === 'light' ? 'white' : 'orange.600'} to='/about'>
					About
				</Link>
				<Link as={NavLink} color={colorMode === 'light' ? 'white' : 'orange.600'} exact to='/projects'>
					Project
				</Link>
				<Link as={NavLink} color={colorMode === 'light' ? 'white' : 'orange.600'} exact to='/contact'>
					Contact
				</Link>

				<Icon
                    color={colorMode === 'light' ? 'white': 'orange.600'}
					name={colorMode === 'light' ? 'moon' : 'sun'}
					onClick={toggleColorMode} 
				>
					{colorMode === 'light' ? 'Dark' : 'Light'}
				</Icon>
			</Flex>
            </Box>
		</Menu>
	);
};

export default NavBar;
