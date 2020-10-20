import React, { useEffect } from 'react';

import { Text, Flex, Heading, Image } from '@chakra-ui/core';

import gsap from 'gsap';
import Jeremy from '../assets/Jeremy.jpg'


const Home = () => {
	function intro() {
		var t1 = gsap.timeline()
			.from('.greeting', {
				duration: 2,
				ease: 'back',
				opacity: 0,
				scale: 1,
			}).reverse()

		return t1
	}

	function name() {
		var t2 = gsap
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
		return t2;
	}
	function picture(){
		var t3 = gsap.timeline().from('.me', {
			duration:1.5,
			ease: 'bounce.out',
			y:-300,
			opacity: 0,
			rotate: 360,
			// scale:1,
		})
		return t3
	}
	function Full() {
		var t3 = gsap.timeline().from('.full', {
			duration: 2,
			ease: 'bounce.out',
			opacity: 0,
			scale: 2,
		});
		return t3;
	}
	function place() {
		var t4 = gsap.timeline().from('.location', {
			duration: 1,
			ease: 'bounce.out',
			opacity: 0,
			scale: 2
		})
		return t4
	}

	function words() {
		var t5 = gsap.timeline().from('.blurb', {
			duration: 1,
			ease: 'back',
			opacity: 0,
			scale: 1
		})
		return t5
	}


	useEffect(() => {
		var master = gsap.timeline();
		master
		.add(intro())
		.add(name(), '-=1.2')
		.add(picture(), '-=1')
		.add(Full(), '-=1')
		.add(place(), '-=1')
		.add(words(),'-=.75')
		
		;

	}, []);

	return (
		<>

			<Flex
				direction='column'
				align='center'
				w='100%'
				h='60vh'
			>
				<Text className='greeting'
					m='-1%'
					fontSize={ ['2xl', '4xl', '5xl', '5xl'] }
				>Hello, I am</Text>
				<Image 
				className='me'
				src={ Jeremy }
					alt="Jeremy J McWilliams"
					w={ ['60%', '60%', '40%', '20%'] }
					borderRadius='50%'
					boxShadow='5px 5px 5px grey'
					marginTop={['-17%','-18%','-8%',"-3%"]}
				/>


				<Flex
				marginTop='2%'
				>
					<Heading
						m='1%'
						fontSize={ ['2xl', '4xl', '5xl', '5xl'] }
						className='first'
					>
						Jeremy
							</Heading>
					<Heading
						m='1%'
						fontSize={ ['2xl', '4xl', '5xl', '5xl'] }
						className='middle'
					>
						J.
							</Heading>

					<Heading
						m='1%'
						fontSize={ ['2xl', '4xl', '5xl', '5xl'] }
						className='last'
					>
						McWilliams
							</Heading>
				</Flex>

				<Heading
					fontSize={ ['xl', '2xl', '3xl', '4xl'] }
					marginLeft='2%'
					className='full'
					textAlign='center'
				>
					Software Engineer
					</Heading>
				<Text className='location'
					fontSize={ ['l', 'xl', '2xl', 'xl'] }
					fontWeight='bold'

				>San Francisco Bay Area</Text>


				<Text
					fontSize={ ['l', 'xl', '2xl', 'xl'] }
					
					width={ ['100%', '100%', '100%', '60%'] }
					textAlign='center'
					className='blurb'
				>
					Focused on building teams, adding value, and delivering creative projects. With a background in customer service and entertainment, I have a wealth of unique experiences and skills. Curious to learn and thrilled to create.
				</Text>

			</Flex>

		</>
	);
};

export default Home;
