import React, { useEffect, useState } from 'react';

import { Text, Heading, Box, Flex } from '@chakra-ui/core';

import gsap from 'gsap';

const Home = () => {
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
		master.add(Full(), '+=2.4');
	}, []);

	return (
		<>
			<Box>
				<Flex justify='center'>
					<Text
						fontSize={['xl', '2xl', '3xl', '4xl']}
						marginLeft='2%'
						className='full'
					>
						Full Stack Developer
					</Text>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
