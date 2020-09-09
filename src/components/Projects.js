import React from 'react';

import { Flex, Box, useColorMode, Heading } from '@chakra-ui/core';

import GOK from './Apps/GOK';
import D8 from './Apps/D8';
import J2 from './Apps/J2';
import Life from './Apps/Life'
import GH from './Apps/GH'

import gsap from 'gsap';

const Projects = () => {
	const { colorMode } = useColorMode();

	// GSAP fns
	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			y: -60,
			ease: 'power4.out',
			stagger: {
				amount: 0.3,
			},
		});
	};

	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 0,
			y: -70,
			ease: 'power4.out',
		});
	};

	return (
		<Box zIndex='.7'>
			<Box m={['18% 0', '9%']}>
				<Heading
					textAlign='center'
					fontSize={['4xl', '6xl']}
					color={colorMode === 'light' ? 'black' : 'silver'}
				>
					Projects
				</Heading>
			</Box>
			<Flex direction='column' justify='center'>
				<GOK colorMode={colorMode} fadeIn={fadeIn} fadeOut={fadeOut} />
				<D8 colorMode={colorMode} fadeIn={fadeIn} fadeOut={fadeOut} />
				<J2 colorMode={colorMode} fadeIn={fadeIn} fadeOut={fadeOut} />
				<Life colorMode={colorMode} fadeIn={fadeIn} fadeOut={fadeOut} />
				<GH colorMode={colorMode} fadeIn={fadeIn} fadeOut={fadeOut} />
			</Flex>
		</Box>
	);
};

export default Projects;
