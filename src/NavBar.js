import React from 'react';
import { Link as RLink } from 'react-router-dom';

import {
	Menu,
	Link,
	Icon,
	useColorMode,
	Flex,
	Box,
	Text,
} from '@chakra-ui/core';

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	// First, create an alias for breakpoints

	return (
		<Menu>
			<Box
				bg={colorMode === 'light' ? 'orange.500' : ''}
                border={colorMode === 'light' ? '' : '.6px solid white'}
                w='100%'
                position='fixed'
				className='navbar'
				
				p={[1, 2, 4, 4]}
			>
				<Flex justify='space-around' align='center'>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'white' : 'gray.100'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						exact
						to='/'
					>
						Home
					</Link>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'white' : 'gray.100'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						to='/about'
					>
						About
					</Link>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'white' : 'gray.100'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						exact
						to='/projects'
					>
						Project
					</Link>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'white' : 'gray.300'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						exact
						to='/contact'
					>
						Contact
					</Link>

					<Icon
						size='1.6rem'
						color={colorMode === 'light' ? '#000' : '#FFF'}
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
