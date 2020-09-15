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
		// marginTop={['25% ', '20% ','12% ', '4% ']}
		// p={['15% 0','15% 0','16% 0','7% 0']}
		>
			<Flex
				direction={['column', 'column', 'column', 'row']}
				justify='center'
				align='center'
			>
				<Box
					maxW={['sm', 'md', '3xl', 'lg']}
					// border='3px solid red'

					borderWidth='1px'
					borderColor={colorMode === 'light' ? 'black' : 'white'}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'black' : 'white'}
					color={colorMode === 'light' ? 'white' : 'black'}
					m='3.5%'
				>
					<Flex direction='column' justify='center' align='center'>
						{/* <Heading fontSize={['3xl', '4xl']} fontWeight='bold' as='b'>
							Jeremy McWilliams
						</Heading> */}
						<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />

						{/* <Heading
							fontSize='3xl'
							fontWeight='bold'
							background={colorMode === 'light' ? 'black' : 'white'}
							color={colorMode === 'light' ? 'white' : 'black'}
							// borderWidth='1px'
						>
							Full Stack Developer
						</Heading> */}
					</Flex>
				</Box>
				<Box m='3.5%' maxW={['sm', 'md', '2xl', 'xl']}>
					<Flex justify='space-around' direction='column'>
						<Text
							fontSize={['sm', 'md', 'xl', 'lg']}
							// background={colorMode === 'light' ? 'silver' : ''}
							color={colorMode === 'light' ? 'black' : 'white'}
							textAlign='center'
							p='1%'
						>
						Along the way, I've discovered the passion for developing and producing creative projects. Gaining skills through customer-service, storytelling, and production, I'm focused on leadership, communication, and team building.  
						</Text>
						<Heading
							fontSize='3xl'
							fontWeight='bold'
							// background={colorMode === 'light' ? 'black' : 'white'}
							// color={colorMode === 'light' ? 'black' : 'white'}
						>
							Skills
						</Heading>

						<Box p='1%'>
							<Box m='1%'>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>
									Technical
								</Heading>
								<Text>
									HTML5 | CSS | JavaScript | React | Redux | NodeJS | ExpressJS
									| KnexJS | Python | Prisma | Apollo | SQL | Git | AWS | Heroku{' '}
								</Text>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>DataBase</Heading>
								<Text>PostgreSQL | SQLite3 | MongoDB </Text>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>
									Organizational
								</Heading>
								<Text>Agile | Notion | Trello | GitHub</Text>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>Design</Heading>
								<Text>
									Figma | Adobe | SCSS | LessJS | Material-UI | Chakra-UI |
									Styled-Components
								</Text>
							</Box>
						</Box>
						<Flex justify='space-around'>
							<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>
										<Text fontSize='xl'>Resume</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://app.codesignal.com/profile/jeremy_m76'>
										<Text fontSize='xl'>CodeSignal</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.codewars.com/users/j2macwilliams'>
										<Text fontSize='xl'>CodeWars</Text>
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
