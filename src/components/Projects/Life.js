import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';

import Game from '../../assets/gameOfLife.jpeg';

const Life = ({ colorMode, fadeIn, fadeOut }) => {
	const fourRef = useRef(null);
	const interFour = useIntersection(fourRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	});

	interFour && interFour.intersectionRatio < 0.4
		? fadeOut('.four')
		: fadeIn('.four');

	return (
		<Box ref={fourRef} w='100%' h={['70vh', '35vh']} marginBottom='15%'>
			<Flex
				direction={['column-reverse', 'row']}
				align='center'
				justify='space-evenly'
				className='four'
			>
				<Box w='100%'>
					<Box textAlign='center' lineHeight='2'>
						<Heading>Game of Lie</Heading>
						<Box
							lineHeight='1.4'
							p='0 1%'
							background='silver'
							color='black'
							rounded='md'
							fontSize={['sm', 'lg']}
						>
							<Flex wrap='wrap' justify='space-around'>
								<Text w={['30%', '10%']}>React</Text>
								<Text w={['30%', '10%']}>Material-UI</Text>
							</Flex>
						</Box>
						<Text fontSize={['lg', '2xl']} lineHeight='1.6' fontStyle='italic'>
							Conway's Game of Life
						</Text>
						<Box>
							<Flex justify='space-around' align='center'>
								<Text fontSize={['2xl', '3xl']} fontWeight='semibold'>
									Front End Developer
								</Text>
								<Link href='https://github.com/J2Macwilliams/game_of_life '>
									<Box size={['1.6rem', '2.2rem']} as={FaGithub} />
								</Link>

								<Link href='https://j2-game-of-life.netlify.app/'>
									<Icon size={['1.6rem', '2.2rem']} name='external-link' />
								</Link>
							</Flex>
						</Box>
					</Box>
				</Box>
				<Box
					// maxW={['100%', '25%']}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'white' : ''}
					m='2%'
					textAlign='center'
				>
					<Image objectFit='cover' src={Game} alt='Game of Life' />
				</Box>
			</Flex>
		</Box>
	);
};

export default Life;
