import React from 'react';
import { Link as RLink } from 'react-router-dom';

import {
	
	Link,
	Icon,
	useColorMode,
	Flex,
	Box,
	
} from '@chakra-ui/core';

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box w='100%' position='fixed' >
			<Box
				p={[1, 2, 4, 4]}
				bg={colorMode === 'light' ? 'white' : 'black'}
				border={colorMode === 'light' ? '.7px solid black' : '.6px solid white'}
			>
				<Flex justify='space-around' align='center'>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'black' : 'gray.100'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						exact
						to='/'
					>
						Home
					</Link>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'black' : 'gray.100'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						exact
						to='/projects'
					>
						Projects
					</Link>
					<Link
						as={RLink}
						color={colorMode === 'light' ? 'black' : 'gray.300'}
						fontSize={['md', 'lg', 'xl', '2xl']}
						exact
						to='/about'
					>
						About
					</Link>
				</Flex>
			</Box>
			<Box p='.5%' textAlign='right'>
				<Icon
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
