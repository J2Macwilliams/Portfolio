import React, { useEffect } from 'react';
import { Link as RLink } from 'react-router-dom';
import gsap from 'gsap';
import { Link, Icon, useColorMode, Flex, Box } from '@chakra-ui/core';

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
		<Box w='100%' position='fixed' zIndex='1'>
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
			<Box
				p='.5%'
				bg={colorMode === 'light' ? 'white' : 'black'}
				textAlign='right'
			>
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
