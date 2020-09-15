import React, { useEffect, useState } from 'react';

import { Text, Heading, Box, Flex } from '@chakra-ui/core';

import gsap from 'gsap';

const Home = () => {
	// const [trigger, setTrigger] = useState(true);
	// function FE() {
	// 	var t2 = gsap
	// 		.timeline()
	// 		.from('.front', {
	// 			duration: 2,
	// 			ease: 'back',
	// 			opacity: 0,
	// 			scale: 0,
	// 		})
	// 		.reverse();

	// 	return t2;
	// }
	// function BE() {
	// 	var t2 = gsap
	// 		.timeline()
	// 		.from('.back', {
	// 			duration: 2,
	// 			ease: 'back',
	// 			opacity: 0,
	// 			scale: 0,
	// 		})
	// 		.reverse();

	// 	return t2;
	// }
	// function solver() {
	// 	var t2 = gsap
	// 		.timeline()
	// 		.from('.problem', {
	// 			duration: 2,
	// 			ease: 'back',
	// 			opacity: 0,
	// 			scale: 0,
	// 		})
	// 		.reverse();

	// 	return t2;
	// }
	// function leader() {
	// 	var t2 = gsap
	// 		.timeline()
	// 		.from('.lead', {
	// 			duration: 2,
	// 			ease: 'back',
	// 			opacity: 0,
	// 			scale: 0,
	// 		})
	// 		.reverse();

	// 	return t2;
	// }

	// useEffect(() => {
	// 	console.log(trigger)
	// 	if (trigger) {
	// 		var master = gsap.timeline();
	// 		master.add(FE(), '+=3.3').add(BE()).add(solver()).add(leader());
	// 		setTrigger(!trigger);
			
	// 	}
	// 	console.log(trigger)
	// }, []);

	return (
		<>
			<Box marginTop={['40% ', '30%', '20%', '5% ']}>
				<Flex direction='column' justify='center' align='center'>
					{/* <Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='front'>
						Front End
					</Text>
					<Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='back'>
						Back End
					</Text>
					<Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='problem'>
						Problem Solver
					</Text>
					<Text fontSize={['2xl', '2xl', '3xl', '4xl']} className='lead'>
						Leader
					</Text> */}
					{/* <Text
						className='blurb'
							fontSize={['sm', 'md', 'xl', '2xl']}
							fontWeight='bold'
							// color={colorMode === 'light' ? 'black' : 'white'}
							textAlign='center'
							p='1%'
						>
							Jack of trades turned Full Stack Developer.
							<br />Ever curious to
							learn, I'm a problem solver, developer, and teammate.<br/> Passionate
							to create, motivated to deliver!
						</Text> */}
				</Flex>
			</Box>
		</>
	);
};

export default Home;
