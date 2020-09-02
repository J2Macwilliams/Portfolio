import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
// Image
import Garden from '../../assets/Garden.jpeg';

const GOK = ({ fadeIn, fadeOut, colorMode }) => {
	const oneRef = useRef(null);

	const interOne = useIntersection(oneRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	});

	interOne && interOne.intersectionRatio < 0.4
		? fadeOut('.one')
		: fadeIn('.one');

	return (
		<Box ref={oneRef} w='100%'
		h = {['70vh', '35vh']}
		marginBottom='20%'
		>
			<Flex direction={['column', 'row']} align='center' justify='space-evenly'>
				<Box
					className='one'
					maxW={['xs', 'xs', 'md', 'md']}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'white' : ''}
					m='2%'
					textAlign='center'
				>
					<Image
						objectFit='cover'
						src={Garden}
						alt='Garden of Knowledge Logo'
					/>
				</Box>
				<Box className='one' w='100%'>
					<Box textAlign='center' lineHeight='2'>
						<Heading>Garden Of Knowledge</Heading>
						<Flex
							wrap='wrap'
							justify='space-around'
							lineHeight='1.4'
							bg='silver'
							color='black'
							rounded='md'
							fontSize={['sm', 'lg']}
						>
							<Text w={['20%', '10%']}>React</Text>
							<Text w={['20%', '10%']}>Redux</Text>
							<Text w={['20%', '10%']}>NodeJS</Text>
							<Text w={['20%', '10%']}>Express</Text>
							<Text w={['20%', '10%']}>KnexJS</Text>
							<Text w={['20%', '10%']}>Postgres</Text>
							<Text w={['20%', '10%']}>SQL</Text>
							<Text w={['20%', '10%']}>AWS</Text>
						</Flex>
						<Text fontSize={['lg', '2xl']} lineHeight='1.6' fontStyle='italic'>
							Learning Management System for an International School in Bahrain
						</Text>
						<Box>
							<Flex wrap='wrap' justify='space-around' align='center'>
								<Text fontSize={['3xl', '5xl']} fontWeight='bold'>
									Team Lead
								</Text>
								<Text fontSize={['2xl', '3xl']} fontWeight='semibold'>
									Full Stack Developer
								</Text>
								<Link href='https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818'>
									<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
								</Link>

								<Link href='https://gardenofknowledge.netlify.app/'>
									<Icon size={['1.6rem', '2.2rem']} name='external-link' />
								</Link>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default GOK;
