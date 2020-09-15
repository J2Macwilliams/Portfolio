import React from 'react';
import { NavLink } from 'react-router-dom';
// import gsap from 'gsap';
import {
	Icon,
	useColorMode,
	Box,
	Heading,
	Flex,
	Image,
	Link,
	Text
} from '@chakra-ui/core';
import Logo from '../assets/Jlogo.png';
import DarkLogo from '../assets/Jlogodark.png';
import '../App.css';
const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box
			w='100%'
			position='fixed'
			zIndex='1'
			bg={colorMode === 'light' ? '#f2f2f2' : '#363636'}
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
			<Box
				p='.5%'
				textAlign='right'
				w='100%'
			
			>
				<Flex justify='space-between'>
					<Box m={['2% 1% 0', '', '']}>
					<Link
						
						href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'
					>
						<Image
						
							className='logo'
							size={['2rem', '3rem']}
							src={colorMode === 'light' ? Logo : DarkLogo}
						/>
					</Link>
					</Box>
					<Flex direction='column' align='center'>
						<Flex>
							<Heading m='1%' fontSize={['3xl', '4xl', '5xl', '5xl']} className='first'>
								Jeremy
							</Heading>
							<Heading m='1%' fontSize={['3xl', '4xl', '5xl', '5xl']} className='middle'>
								J.
							</Heading>

							<Heading m='1%' fontSize={['3xl', '4xl', '5xl', '5xl']} className='last'>
								McWilliams
							</Heading>
						</Flex>
						<Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='Full'>
							Full Stack Developer
						</Text>
					</Flex>
					<Icon
						className='darkMode'
						size='1.6rem'
						color={colorMode === 'light' ? '#363636' : '#f2f2f2'}
						name={colorMode === 'light' ? 'moon' : 'sun'}
						onClick={toggleColorMode}
					/>
				</Flex>
			</Box>
		</Box>
	);
};

export default NavBar;
