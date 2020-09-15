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

import { Grade } from '@material-ui/icons';

import Jeremy from '../assets/Jeremy.jpg';

const About = () => {
	const { colorMode } = useColorMode();
	return (
		<Box>
			<Flex
				direction={['column', 'column', 'column', 'row']}
				justify='center'
				align='center'
			>
				<Box
					maxW={['sm', 'md', '3xl', 'lg']}
					borderWidth='1px'
					borderColor={colorMode === 'light' ? 'black' : 'white'}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'black' : 'white'}
					color={colorMode === 'light' ? 'white' : 'black'}
					m='3.5%'
				>
					<Flex direction='column' justify='center' align='center'>
						<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />
					</Flex>
				</Box>
				<Box m='3.5%' maxW={['sm', 'md', '2xl', 'xl']}>
					<Flex justify='space-around' direction='column'>
						<Text
							fontSize={['sm', 'md', 'xl', 'xl']}
							fontWeight='bold'
							color={colorMode === 'light' ? 'black' : 'white'}
							textAlign='center'
							p='1%'
						>
							Jack of trades turned Full Stack Developer.
							<br />I enjoy React, GraphQL, and NodeJS, while ever curious to
							learn. I'm a problem solver, developer, and teammate. Passionate
							to create, motivated to deliver!
						</Text>
						<Heading fontSize='3xl' fontWeight='bold'>
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
