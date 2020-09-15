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
	
			<Flex
				direction={['column', 'column', 'column', 'row']}
				justify='center'
				align='center'
			>
				<Box
					maxW={['sm', 'md', 'xl', '2xl']}
					borderWidth='1px'
					borderColor={colorMode === 'light' ? 'black' : 'white'}
					rounded='lg'
					overflow='hidden'
					bg={colorMode === 'light' ? 'black' : 'white'}
					color={colorMode === 'light' ? 'white' : 'black'}
					m={['2%','','0 1.2% 0','0 1.2% 0']}
				>
					<Flex direction='column' align='center'>
						<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />
					</Flex>
				</Box>
				<Box m={['2%','','0 1.2% 0','0 1.2% 0']} p='1%' maxW={['sm', 'md', '2xl', '3xl']}>
					<Flex justify='space-around' direction='column'>
						<Text
							fontSize={['sm', 'md', 'xl', 'xl']}
							fontWeight='bold'
							color={colorMode === 'light' ? 'black' : 'white'}
							textAlign='center'
							p='1%'
						>
							Jack of trades turned Full Stack Developer.
							<br />Ever curious to
							learn, I'm a problem solver, developer, and teammate.</Text>
					
						<Heading fontSize='3xl' fontWeight='bold'>
							Skills
						</Heading>

						<Box p='1%'>
							<Box m='1%'>
								<Heading fontSize={['xl', 'xl', 'xl', 'xl']}>
									Technical
								</Heading>
								<Text fontSize={['md', 'lg', 'lg', 'xl']}>
									HTML5 | CSS | JavaScript | React | Redux | NodeJS | ExpressJS
									| KnexJS | Python | Prisma | Apollo | SQL | Git | AWS | Heroku{' '}
								</Text>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>DataBase</Heading>
								<Text fontSize={['md', 'lg', 'lg', 'xl']}>PostgreSQL | SQLite3 | MongoDB </Text>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>
									Organizational
								</Heading>
								<Text fontSize={['md', 'lg', 'lg', 'xl']}>Agile | Notion | Trello | GitHub</Text>
								<Heading fontSize={['xl', 'xl', 'xl', '2xl']}>Design</Heading>
								<Text fontSize={['md', 'lg', 'lg', 'xl']}>
									Figma | Adobe | SCSS | LessJS | Material-UI | Chakra-UI |
									Styled-Components
								</Text>
							</Box>
						</Box>
						<Flex justify='space-around'>
							<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>
										<Text fontSize={['xl', 'xl','2xl','2xl']}>Resume</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://app.codesignal.com/profile/jeremy_m76'>
										<Text fontSize={['xl', 'xl','2xl','2xl']}>CodeSignal</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
							<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
								<Flex justify='center'>
									<Link href='https://www.codewars.com/users/j2macwilliams'>
										<Text fontSize={['xl', 'xl','2xl','2xl']}>CodeWars</Text>
										<Box size={['2rem', '3rem']} as={Grade} />
									</Link>
								</Flex>
							</Box>
						</Flex>
						{/* </Box> */}
					</Flex>
				</Box>
			</Flex>
		
	);
};

export default About;
