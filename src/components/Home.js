import React, { useEffect } from 'react';

import { Text, Heading, Box, Flex } from '@chakra-ui/core';

import gsap from 'gsap';

const Home = () => {

	function intro() {
		var t1 = gsap
			.timeline()
			.from('.first', {
				duration: 1.5,
				opacity: 0,
				ease: 'bounce.out',
				y: -400,
			})
			.from(
				'.middle',
				{
					duration: 1.5,
					opacity: 0,
					ease: 'bounce.out',
					y: -400,
				},
				'-=1'
			)
			.from(
				'.last',
				{
					duration: 1.25,
					opacity: 0,
					ease: 'bounce.out',
					y: -400,
				},
				'-=1.25'
			);
		return t1;
	}

	function position() {
		var t2 = gsap
			.timeline()
			.from('.title', {
				duration: 2,
				ease: 'back',
				opacity: 0,
				scale: 0,
			})
			

		return t2;
	}
	

	useEffect(() => {
		var master = gsap.timeline();
		master.add(intro()).add(position());
	}, []);

	return (
		<Box m={['50% 0', '20% 0']}>
			<Flex justify='center' direction='column' align='center'>
				<Box>
					<Flex>
						<Heading m='1%' fontSize={['3xl', '5xl']} className='first'>
							Jeremy
						</Heading>
						<Heading m='1%' fontSize={['3xl', '5xl']} className='middle'>
							J.
						</Heading>
						<Heading m='1%' fontSize={['3xl', '5xl']} className='last'>
							McWilliams
						</Heading>
					</Flex>
				</Box>

				<Box>
					<Text fontSize={['xl', '3xl']} className='title'>
						Full Stack Developer
					</Text>
					
				</Box>
			</Flex>
		</Box>
	);
};

export default Home;
