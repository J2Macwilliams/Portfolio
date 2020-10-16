import React, { useEffect} from 'react';

import { Text, Flex, Heading } from '@chakra-ui/core';
import Typical from 'react-typical'
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
	// function Full() {
	// 	var t2 = gsap.timeline().from('.full', {
	// 		duration: 2,
	// 		ease: 'back',
	// 		opacity: 0,
	// 		scale: 1,
	// 	});
	// 	return t2;
	// }
	

	useEffect(() => {
		var master = gsap.timeline();
		master.add(intro());
		
	}, []);

	return (
		<>
			<Flex direction='column' 
			align='center'
			boxSizing='border-box'
			w='100%'
			h='50vh'
			>
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
						Software Engineer
					</Text>
					
						<Text
					fontSize={['l', 'xl', '2xl', '2xl']}
					marginTop='1%'
					
					>
						<Typical 
						
						steps={['Full-Stack', 1000,'Front-End', 1000,'Back-End', 1000, 'Leader', 1000, 'Product Owner', 1000, 'Producer', 1000, 'Artist', 1000, 'Photographer', 1000, 'problem solver', 1000 ]}
						loop={Infinity}
						
						/>

					</Text>
					{/* } */}
				
				</Flex>
			
		</>
	);
};

export default Home;
