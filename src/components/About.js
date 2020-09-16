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
			direction='column'
			// direction={['column', 'column', 'column', 'row']}
			justify='center'
			align='center'
			marginBottom='1%'
		>
			<Flex p='1%' direction={['column', 'column', 'column', 'row']}>
				<Box
					maxW={['sm', 'md', 'xl', 'md']}
					borderWidth='2px'
					borderColor={colorMode === 'light' ? 'black' : 'white'}
					rounded='lg'
					overflow='hidden'
					m={['2%', '', '0 1.2% 0', '0 1.2% 0']}
				>
					<Image objectFit='cover' src={Jeremy} alt='Jeremy McWilliams' />
				</Box>
				<Flex align='center' direction='column'>
					<Text
						maxW={['sm', 'md', 'xl', 'xl']}
						fontSize={['sm', 'md', 'xl', '2xl']}
						fontWeight='bold'
						color={colorMode === 'light' ? 'black' : 'white'}
						textAlign='center'
						p='1%'
					>
						<br />
						Recent graduate of Lambda School, where I got my start in
						technology. And a background in customer-service, storytelling, and
						production, I've developed skills to produce creative scalable
						impactful applications. I'm passionate to create, motivated to
						deliver and curious to learn.
					</Text>
					<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
							<Flex justify='center'>
								<Link href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>
									<Text fontSize={['xl', 'xl', '2xl', '2xl']}>Resume</Text>
									<Box size={['2rem', '3rem']} as={Grade} />
								</Link>
							</Flex>
						</Box> 
				</Flex>
			</Flex>
			<Box
				// m={['2%', '', '0 1.2% 0', '0 1.2% 0']}
				p='1%'
				maxW={['sm', 'md', '2xl', '6xl']}
			>
				<Heading fontSize={['2xl', '3xl', '3xl', '5xl']} fontWeight='bold'>
					Skills
				</Heading>
				<Flex justify='space-around'>
					<Box p='1%'>
						<Box m='1%'>
							<Text fontSize={['md', 'lg', 'lg', '2xl']}>
								HTML5 | CSS | JavaScript | React | Redux | NodeJS | ExpressJS |
								KnexJS | Python | Prisma | Apollo | SQL | Git | AWS | Heroku |
								PostgreSQL | SQLite3 | MongoDB Agile | Notion | Trello | GitHub
								| Figma | Adobe | SCSS | LessJS | Material-UI | Chakra-UI |
								Styled-Components
							</Text>
						</Box>
					</Box>

					{/* <Box m={['1%', '0 7%']} textAlign='center' p='3%'>
							<Flex justify='center'>
								<Link href='https://www.canva.com/design/DAEHOOyvAWU/s_rFsgXikAk4CtObduCrGA/view?utm_content=DAEHOOyvAWU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>
									<Text fontSize={['xl', 'xl', '2xl', '2xl']}>Resume</Text>
									<Box size={['2rem', '3rem']} as={Grade} />
								</Link>
							</Flex>
						</Box> */}
					{/* <Box m={['1%', '0 7%']} textAlign='center' p='3%'>
							<Flex justify='center'>
								<Link href='https://app.codesignal.com/profile/jeremy_m76'>
									<Text fontSize={['xl', 'xl', '2xl', '2xl']}>CodeSignal</Text>
									<Box size={['2rem', '3rem']} as={Grade} />
								</Link>
							</Flex>
						</Box>
						<Box m={['1%', '0 7%']} textAlign='center' p='3%'>
							<Flex justify='center'>
								<Link href='https://www.codewars.com/users/j2macwilliams'>
									<Text fontSize={['xl', 'xl', '2xl', '2xl']}>CodeWars</Text>
									<Box size={['2rem', '3rem']} as={Grade} />
								</Link>
							</Flex>
						</Box> */}
				</Flex>
			</Box>
		</Flex>
	);
};

export default About;
