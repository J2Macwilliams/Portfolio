import React, { useEffect, useState } from 'react';

import { Text, Heading, Box, Flex } from '@chakra-ui/core';

import gsap from 'gsap';

const Home = () => {

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
		<>
			<Box marginTop={['40% ', '30%', '20%', '5% ']}>
				<Flex direction='column' align='center'>
					<Box>
						{/* <Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='FrontEnd'>
							Front End
						</Text> */}
						{/* <Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='back'>
						Back End
					</Text>
					<Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='problem'>
						Problem Solver
					</Text>
					<Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='leader'>
						Leader
					</Text> */}
					</Box>
				</Flex>
			</Box>{' '}
		</>
	);
};

export default Home;
