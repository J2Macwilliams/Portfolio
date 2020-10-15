import React, { useEffect } from 'react';

import { Text,  Box, Flex, Heading } from '@chakra-ui/core';

import gsap from 'gsap';

const Home = () => {
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
	function Full() {
		var t2 = gsap.timeline().from('.full', {
			duration: 2,
			ease: 'back',
			opacity: 0,
			scale: 0,
		});
		return t2;
	}

	useEffect(() => {
		var master = gsap.timeline();
		master.add(intro()).add(Full());
	}, []);

	return (
		<>
			<Box>
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
					
					<Text
						fontSize={['xl', '2xl', '3xl', '4xl']}
						marginLeft='2%'
						className='full'
					>
						Full-Stack Engineer
					</Text>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
