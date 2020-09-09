import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';
// Image
import './project_images.css';
import game from '../../assets/Life/game.png';
import alive from '../../assets/Life/alive.png';

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
		<Box ref={fourRef} w='100%' h={['70vh', '35vh']} marginBottom={['-20%','13%']}
		>
			<Flex
				direction={['column-reverse', 'row']}
				// align='center'
				justify='space-evenly'
				className='four'
			>
				<Box w='100%'>
					<Box textAlign='center' lineHeight='2'>
						<Heading>Game of Life</Heading>
						<Box
							lineHeight='1.4'
							p='0 1%'
							background='silver'
							color='black'
							rounded='md'
							fontSize={['sm', 'lg']}
						>
							<Flex wrap='wrap' justify='space-around'>
								<Text w={['30%','25%', '25%', '20%']}>React</Text>
								<Text w={['30%','25%', '25%', '20%']}>Material-UI</Text>
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
				<Box id='Images' 
				
				
					size={['','2xl','4xl','6xl']} 
					m={['0 0 55% ', '0 5% ']}>
						<Image className='bottom' src={game}/>
						<Image className='top' src={alive} />
					</Box>
			</Flex>
		</Box>
	);
};

export default Life;
