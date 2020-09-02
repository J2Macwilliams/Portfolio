import React from 'react';
import { useColorMode, Heading, Box, Text, Flex, Image, Link } from '@chakra-ui/core';
// import CodeWars from '../assets/CodeWars.png'
import { Grade } from '@material-ui/icons';

// import { BsFillXDiamondFill } from 'react-icons/gi';

import Jeremy from '../assets/Jeremy.jpg';

const About = () => {
	const { colorMode } = useColorMode();
	return (
		<Box m={['18% 0']}>
			<Heading
				fontSize='2xl'
				fontWeight='semibold'
				textAlign={['left', 'left', 'center', 'center']}
			>
				About
			</Heading>

			<Flex justify='space-around' align='center' wrap='wrap'>
				<Box
					maxW={['sm', 'md', 'md', 'md']}
					borderWidth='1px'
					borderColor={colorMode === 'light' ? 'black' : 'white'}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'white' : ''}
					m='3% 0'
					
				>
					<Flex direction='column' justify='center' align='center'>
						<Heading fontSize='4xl' fontWeight='bold' as='b'>
							Jeremy McWilliams
						</Heading>
						<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />
					</Flex>
				</Box>
				<Box maxW={['sm', 'md', 'md', 'md']}>
					<Flex justify='center' direction='column' align='center'>
						<Box
							borderWidth='1px'
							rounded='lg'
							borderColor={colorMode === 'light' ? 'black': 'silver'}
							overflow='hidden'
							maxW={['sm', 'md', 'md', 'md']}
							fontWeight='semibold'
							letterSpacing='wide'
							textAlign='center'
						>
							<Heading
								fontSize='3xl'
								fontWeight='bold'
								background={colorMode === 'light' ? 'black' : 'white'}
								color={colorMode === 'light' ? 'white' : 'black'}
								// borderWidth='1px'
							>
								Software Developer
							</Heading>

							<Text
								fontSize='lg'
								background={colorMode === 'light' ? 'silver' : ''}
								color={colorMode === 'light' ? 'white' : 'silver'}
								
								p='2%'
							>
								- focused on leadership, communication, and team success with a
								background in customer service, storytelling, and production. 
								
							</Text>
							<Text 
							background={colorMode === 'light' ? 'white' : 'silver'}
							color={colorMode === 'light' ? 'black' : 'black'}
							fontWeight='bold'
							fontSize='xl'>Work Smart! Work Hard! <br />Produce Results.</Text>
						</Box>
						<Box maxW={['sm', 'md', 'md', 'md']}>
							<Box textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://resume.creddle.io/resume/2nf81o2noz'>
										<Text fontSize='2xl'>Resume</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://app.codesignal.com/profile/jeremy_m76'>
										<Text fontSize='2xl'>CodeSignal</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.codewars.com/users/j2macwilliams'>
										<Text fontSize='2xl'>CodeWars</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default About;
