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
		<Box 
		marginTop={['25% ', '20% ','12% ', '4% ']}
		p='5%'
		>
			

			<Flex  direction={['column','column','column', 'row']} justify='center' align='center'>
				<Box
					maxW={['sm', 'md', '3xl', 'lg']}
					// border='3px solid red'
					
					borderWidth='1px'
					borderColor={colorMode === 'light' ? 'black' : 'white'}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'black' : 'white'}
					color={colorMode === 'light' ? 'white' : 'black'}
					m='3%'
				>
					<Flex direction='column' justify='center' align='center'>
						<Heading fontSize={['3xl', '4xl']} fontWeight='bold' as='b'>
							Jeremy McWilliams
						</Heading>
						<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />
						<Heading
							fontSize='3xl'
							fontWeight='bold'
							background={colorMode === 'light' ? 'black' : 'white'}
							color={colorMode === 'light' ? 'white' : 'black'}
							// borderWidth='1px'
						>
							Full Stack Developer
						</Heading>
						<Text
							fontSize='md'
							// background={colorMode === 'light' ? 'silver' : ''}
							color={colorMode === 'light' ? 'white' : '#545454'}
							textAlign='center'
							p='1%'
						>
							focused on leadership, communication, and team success with a
							background in customer service, storytelling, and production
						</Text>
						<Text textAlign='center' fontWeight='bold' fontSize='sm' >
							Work smart! Work hard! Produce results.
						</Text>
					</Flex>
				</Box>
				<Box m='3%' maxW={['sm', 'md', '2xl', 'xl']}>
					<Flex justify='space-around' direction='column'>
						<Heading
							fontSize='3xl'
							fontWeight='bold'
							// background={colorMode === 'light' ? 'black' : 'white'}
							color={colorMode === 'light' ? 'black' : 'white'}
						>
							Skills
						</Heading>

						<Box p='1%'>
							<Box m='1%'>
								<Heading fontSize='xl'>Technical</Heading>
								<Flex justify='center' wrap='wrap'>
									<Text m='1%' w={['30%', '20%']}>HTML</Text>
									<Text m='1%' w={['30%', '20%']}>JS</Text>
									<Text m='1%' w={['30%', '20%']}>React</Text>
									<Text m='1%' w={['30%', '20%']}>Redux</Text>
									<Text m='1%' w={['30%', '20%']}>NodeJS</Text>
									<Text m='1%' w={['30%', '20%']}>Express</Text>
									<Text m='1%' w={['30%', '20%']}>KnexJS</Text>
									<Text m='1%' w={['30%', '20%']}>Python</Text>
									<Text m='1%' w={['30%', '20%']}>Prisma</Text>
									<Text m='1%' w={['30%', '20%']}>GraphQl</Text>
									<Text m='1%' w={['30%', '20%']}>Apollo</Text>
									<Text m='1%' w={['30%', '20%']}>SQL</Text>
									<Text m='1%' w={['30%', '20%']}>Git</Text>
									<Text m='1%' w={['30%', '20%']}>AWS</Text>
									<Text m='1%' w={['30%', '20%']}>Heroku</Text>
								</Flex>
							</Box>
							<Box m='1%'>
								<Heading fontSize='xl'>Database</Heading>
								<Flex justify='center' wrap='wrap'>
									<Text m='1%' w={['40%','30%']}>PostgreSQL</Text>
									<Text m='1%' w={['40%','30%']}>MongoDB</Text>
									<Text m='1%' w={['40%','30%']}>Sqlite3</Text>
								</Flex>
							</Box>
							<Box m='1%'>
								<Heading fontSize='xl'>Organizational</Heading>
								<Flex justify='center' wrap='wrap'>
									<Text m='1%' w={['30%', '20%']}>Agile</Text>
									<Text m='1%' w={['30%', '20%']}>Notion</Text>
									<Text m='1%' w={['30%', '20%']}>Trello</Text>
									<Text m='1%' w={['30%', '20%']}>Github</Text>
								</Flex>
							</Box>
							<Box m='1%'>
								<Heading fontSize='xl'>Design</Heading>
								<Flex justify='center' wrap='wrap'>
									<Text m='1%' w={['26%','20%']}>Figma</Text>
									<Text m='1%' w={['26%','20%']}>Adobe</Text>
									<Text m='1%' w={['26%','20%']}>CSS</Text>
									<Text m='1%' w={['26%','20%']}>SCSS</Text>
									<Text m='1%' w={['26%','20%']}>LESS</Text>
									<br />
									<Text m='1%' w={['40%','30%']}>Material-UI</Text>
									<Text m='1%' w={['40%','30%']}>Chakra-UI</Text>
									<Text m='1%' w={['60%','50%', '40%','30%']}>Styled-Components</Text>
								</Flex>
							</Box>
						</Box>

						{/* <Box maxW={['sm', 'md', 'md', 'md']}> */}
						<Flex justify='space-around' wrap='wrap'>
							<Box w={['70%', '']} m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>
										<Text fontSize='2xl'>Resume</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box w={['30%', '']} m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://app.codesignal.com/profile/jeremy_m76'>
										<Text fontSize='2xl'>CodeSignal</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box w={['30%', '']} m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.codewars.com/users/j2macwilliams'>
										<Text fontSize='2xl'>CodeWars</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
						</Flex>
						{/* </Box> */}

						
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default About;
