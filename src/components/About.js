import React from 'react';
import {
	useColorMode,
	Heading,
	Box,
	Text,
	Flex,
	Image,
	Link,
} from '@chakra-ui/core';
// import CodeWars from '../assets/CodeWars.png'
import { Grade } from '@material-ui/icons';

// import { BsFillXDiamondFill } from 'react-icons/gi';

import Jeremy from '../assets/Jeremy.jpg';

const About = () => {
	const { colorMode } = useColorMode();
	return (
		<Box m={['18% 0', '10% 0']}>
			<Heading
				fontSize={['4xl', '6xl']}
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
					bg={colorMode === 'light' ? 'black' : 'white'}
					color={colorMode === 'light' ? 'white' : 'black'}
					m='3% 0'
				>
					<Flex direction='column' justify='center' align='center'>
						<Heading fontSize={['3xl', '4xl']} fontWeight='bold' as='b'>
							Jeremy McWilliams
						</Heading>
						<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />
					</Flex>
				</Box>
				<Box maxW={['sm', 'md', 'md', 'md']}>
					<Flex justify='space-around' direction='column' align='center'>
						<Box
							borderWidth='1px'
							rounded='lg'
							borderColor={colorMode === 'light' ? 'black' : 'silver'}
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
								fontSize='xl'
							>
								Work Smart! Work Hard! <br />
								Produce Results.
							</Text>
						</Box>
						<Box
						borderWidth='1px'
						borderColor={colorMode==='light'? 'black' : 'silver'}
						rounded='lg'
						m='5%'
						textAlign='center'
						><Box  >
							<Heading
							fontSize='3xl'
							fontWeight='bold'
							background={colorMode === 'light' ? 'black' : 'white'}
							color={colorMode === 'light' ? 'white' : 'black'}
							>Skills</Heading>
							</Box>
							<Box p="1%">
							<Flex justify='center' wrap='wrap'>
								<Text w={['30%','20%']}>React</Text>
								<Text w={['30%','20%']}>JavaScript</Text>
								<Text w={['30%','20%']}>Python</Text>
								<Text w={['30%','20%']}>Redux</Text>
								<Text w={['30%','20%']}>Prisma</Text>
								<Text w={['30%','20%']}>GraphQl</Text>
								<Text w={['30%','20%']}>Docker</Text>
								<Text w={['30%','20%']}>HTML</Text>
								<Text w={['30%','20%']}>CSS</Text>
								<Text w={['30%','20%']}>NodeJS</Text>
								<Text w={['30%','20%']}>Postgres</Text>
								<Text w={['30%','20%']}>MongoDB</Text>
								<Text w={['30%','20%']}>SQL</Text>
								<Text w={['30%','20%']}>Express</Text>
								<Text w={['30%','20%']}>KnexJS</Text>
								<Text w={['30%','20%']}>Git</Text>
								<Text w={['30%','20%']}>Prisma</Text>
								<Text w={['30%','20%']}>Notion</Text>
								<Text w={['30%','20%']}>Trello</Text>
								<Text w={['30%','20%']}>Less</Text>
								<Text w={['30%','20%']}>SCSS</Text>
								<Text w={['30%','20%']}>Material-UI</Text>
								<Text w={['30%','20%']}>Chakra-UI</Text>
							</Flex>
							</Box>
						</Box>
						<Box maxW={['sm', 'md', 'md', 'md']}>
							<Flex justify='space-around'wrap='wrap'>
								<Box w={['70%','']} m={['1%', '0 7%']} textAlign='center' p='3%'>
									<Flex justify='center'>
										<Link href='https://resume.creddle.io/resume/2nf81o2noz'>
											<Text fontSize='2xl'>Resume</Text>
											<Box size={['2rem', '3rem']} as={Grade} />
										</Link>
									</Flex>
								</Box>
								<Box w={['30%','']} m={['1%', '0 7%']} textAlign='center' p='3%'>
									<Flex justify='center'>
										<Link href='https://app.codesignal.com/profile/jeremy_m76'>
											<Text fontSize='2xl'>CodeSignal</Text>
											<Box size={['2rem', '3rem']} as={Grade} />
										</Link>
									</Flex>
								</Box>
								<Box w={['30%','']} m={['1%', '0 7%']} textAlign='center' p='3%'>
									<Flex justify='center'>
										<Link href='https://www.codewars.com/users/j2macwilliams'>
											<Text fontSize='2xl'>CodeWars</Text>
											<Box size={['2rem', '3rem']} as={Grade} />
										</Link>
									</Flex>
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default About;
