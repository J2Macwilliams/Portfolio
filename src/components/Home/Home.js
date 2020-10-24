import React, { useEffect } from 'react';

// import { Text, Flex, Heading, Image } from '@chakra-ui/core';
import { Typography, Box, CardMedia } from '@material-ui/core'

import gsap from 'gsap';
import Jeremy from '../../assets/Jeremy.jpg'
import { useStyles } from './homeStyles'


const Home = () => {
	const classes = useStyles();
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
			.from('#first', {
				duration: 1.5,
				opacity: 0,
				ease: 'bounce.out',
				y: -400,
			})
			.from(
				'#middle',
				{
					duration: 1.5,
					opacity: 0,
					ease: 'bounce.out',
					y: -400,
				},
				'-=1'
			)
			.from(
				'#last',
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
	function picture() {
		var t3 = gsap.timeline().from('#me', {
			duration: 1.5,
			ease: 'back',
			// y:-300,
			opacity: 0,
			// rotate: 360,
			scale: 1,
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
			.add(picture(), '-=.5')
			.add(Full(), '-=1')
			.add(place(), '-=1')
			.add(words(), '-=.75')

			;

	}, []);

	return (
		<Box className={ classes.home }>


			<Typography variant='h5' className='greeting'

			>Hello, I am</Typography>

			<CardMedia
				component='img'
				id='me'
				className={ classes.media }
				image={ Jeremy }
			// alt="Jeremy J McWilliams"
			/>

			<Box>
				<Box className={ classes.name }>
					<Typography
						variant='h3'
						id='first'
						className={ classes.initials }
					>
						Jeremy
							</Typography>
					<Typography
						variant='h3'
						id='middle'
						className={ classes.initials }
					>
						J.
							</Typography>

					<Typography
						variant='h3'
						id='last'
						className={ classes.initials }
					>
						McWilliams
							</Typography>
				</Box>

				<Typography
					variant='h4'
					className='full'
				>Software Engineer</Typography>
				<Typography variant='h5' className='location'
				>San Francisco Bay Area</Typography>
			</Box>
			<Typography
				className='blurb'
				variant='h6'
			>
				Focused on building teams, adding value, and delivering creative projects. I work the Full Stack. With a background in customer service and entertainment, I have a wealth of unique experiences and skills. Curious to learn and thrilled to create. Let's build something together.
				</Typography>
		</Box>
	);
};

export default Home;
