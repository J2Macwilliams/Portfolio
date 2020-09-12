import React from 'react';
import { Flex, Box, Image, Heading, Icon, Text, Link } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';
// Image
import './project_images.css';
import game from '../../assets/Life/game.png';
import alive from '../../assets/Life/alive.png';

const Life = () => {
	return (
		<>
			<Box w='100%' 
			marginBottom={['30%', '35%', '14%', '22%']}
			>
				<Flex
					justify='space-around'
					align='flex-start'
					direction={[
						'column-reverse',
						'column-reverse',
						'column-reverse',
						'row',
					]}
				>
					<Box w={['100%', '100%', '100%', '45%']} boxSizing='border-box'>
						<Box textAlign='center' lineHeight='2'>
							<Heading>Conway's Game of Life</Heading>
							<Flex
								wrap='wrap'
								justify='space-around'
								lineHeight='1.4'
								bg='silver'
								color='black'
								rounded='md'
								fontSize={['sm', 'sm', 'md', 'lg']}
							>
								<Text w='20%'>React</Text>
								<Text w='20%'>Material-UI</Text>
							</Flex>

							<Flex wrap='wrap' justify='space-around' align='center'>
								<Text fontSize='2xl' fontWeight='bold'>
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
					<Box
						position='fixed'
						id='Images'
						marginBottom={['55%', '52%', '52%', '0']}
						w={['100%', '100%', '100%', '45%']}
					>
						<Image className='bottom' src={game} />
						<Image className='top' src={alive} />
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default Life;
