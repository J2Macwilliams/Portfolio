import React from 'react';
import {
	useColorMode,
	Heading,
	Box,
	Text,
	Flex,
	Image,
} from '@chakra-ui/core';
import Typical from 'react-typical'

// import { Grade } from '@material-ui/icons';

import Jeremy from '../assets/Jeremy.jpg';

const About = () => {
	const { colorMode } = useColorMode();
	return (
		<Flex
			// border='1px solid green'
			direction='column'
			justify='center'
			align='center'

			w={ ['100%', '100%', '100%', '80%'] }
			p='1%'
		>
			<Flex p='1%' direction={ ['column', 'row', 'row', 'row'] }
				// border='1px solid orange'
				w='100%'
				justify='space-between'
				textAlign='center'
			>
				<Box
					w={ ['100%', '50%', '40%', '20%'] }
					m={ ['30% 0 20%', '0', '0', '0'] }
				>
					<Image
						borderWidth='2px'
						borderColor={ colorMode === 'light' ? 'black' : 'white' }
						rounded='lg'
						objectFit='contain' src={ Jeremy } alt='Jeremy McWilliams' />
				</Box>

				<Text
					w={ ['100%', '45%', '59%', '75%'] }
					rounded='md'
					marginTop={ ['3%', 0, 0, 0] }
					fontSize={ ['xl', 'lg', 'lg', 'xl'] }
					fontWeight='bold'

				>
					From the entertainment and restaurant industry to Software Engineer,<br/>
					I am a jack of many trades. <br /><br />Passionate about { '' }
					<Typical
						steps={ ['teamwork.', 1000, 'knitting.', 1000, 'producing.', 1000, 'brewing.', 1000, 'creativity.', 1000, 'disc golf.', 1000, 'photography.', 1000, 'food!', 1000, '& delivering amazing projects.', 1500] }
						loop={ Infinity }
					/>
					<br />Dream. Plan. Execute. Deliver. <br />Rinse &amp; Repeat!
					</Text>
			</Flex>
			<Box
				marginTop={ ['4%', '', '', ''] }
			>
				<Heading
					fontSize={ ['2xl', '3xl', '3xl', '4xl'] } fontWeight='bold'>
					Tech Skills
				</Heading>
				<Text fontSize='lg'>
					HTML5 &ensp; CSS &ensp; JavaScript &ensp; React &ensp; Redux &ensp; Node.js  &ensp;Express.js &ensp;
					Knex.js &ensp; Python &ensp; Prisma &ensp; Apollo &ensp; Docker-Compose &ensp; SQL &ensp; Git &ensp; AWS &ensp; Heroku &ensp;
					PostgreSQL &ensp; SQLite3 &ensp; MongoDB &ensp; Jest  &ensp; React-Testing-Library &ensp; Agile &ensp; Notion &ensp; Trello &ensp; GitHub &ensp;
					Figma &ensp; Adobe Photoshop &ensp; SCSS &ensp; LESS &ensp; Material-UI  &ensp; Chakra-UI &ensp;
					Styled-Components
							</Text>

			</Box>
		</Flex>
	);
};

export default About;
