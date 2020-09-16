import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import {
	Icon,
	useColorMode,
	Box,
	Heading,
	Flex,
	Image,
	Link,
	Text,
} from '@chakra-ui/core';
import Logo from '../assets/Jlogo.png';
import DarkLogo from '../assets/Jlogodark.png';
import '../App.css';
const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	function dark() {
		var d1 = gsap.timeline().from('.darkMode', {
			duration: 3,
			opacity: 1,
			x: -650,
			rotate: 1080,
			ease: 'bounce.out',
		});
		return d1;
	}

	function intro() {
		var t1 = gsap
			.timeline()
			.from('.first', {
				duration: 1.5,
				opacity: 0,
				ease: 'bounce.out',
				y: 400,
			})
			.from(
				'.middle',
				{
					duration: 1.5,
					opacity: 0,
					ease: 'bounce.out',
					y: 400,
				},
				'-=1'
			)
			.from(
				'.last',
				{
					duration: 1.25,
					opacity: 0,
					ease: 'bounce.out',
					y: 400,
				},
				'-=1.25'
			);
		return t1;
	}
	function my_logo() {
		var l1 = gsap.timeline().from('.logo', {
			duration: 3,
			ease: 'back',
			rotation: 1260,
			opacity: 0,
			scale: 0,
		});

		return l1;
	}

	function position() {
		var t2 = gsap.timeline().from('.Full', {
			duration: 2,
			ease: 'back',
			opacity: 0,
			scale: 0,
		});

		return t2;
	}

	useEffect(() => {
		var master = gsap.timeline();
		master
			.add(dark())
			.add(intro(), '-=2.1')
			.add(my_logo(), '-=2.5')
			.add(position(), '-=1');
	}, []);
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
			<Box p='.5%' textAlign='right' w='100%'>
				<Flex justify='space-between'>
					<Box m={['2% 1% 0', '0%', '1%', '0%']}>
						<Link href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>
							<Image
								className='logo'
								size={['2rem', '3rem']}
								src={colorMode === 'light' ? Logo : DarkLogo}
							/>
						</Link>
					</Box>
					<Flex direction='column' align='center'>
						<Flex>
							<Heading
								m='1%'
								fontSize={['2xl', '4xl', '5xl', '5xl']}
								className='first'
							>
								Jeremy
							</Heading>
							<Heading
								m='1%'
								fontSize={['2xl', '4xl', '5xl', '5xl']}
								className='middle'
							>
								J.
							</Heading>

							<Heading
								m='1%'
								fontSize={['2xl', '4xl', '5xl', '5xl']}
								className='last'
							>
								McWilliams
							</Heading>
						</Flex>
						{/* <Text fontSize={['2xl', '2xl', '3xl', '3xl']} className='Full'>
							Full Stack Developer
						</Text> */}
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
