import React from 'react';
import {
	Heading,
	Box,
	Text,
	Flex,
} from '@chakra-ui/core';
import Typical from 'react-typical'

const About = () => {

	return (
		<Flex
			
			direction='column'
			justify='space-between'
			align='center'
			w={ ['100%', '100%', '100%', '80%'] }
		>
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
			
				<Text
					fontSize={ ['xl', 'lg', '2xl', '3xl'] }
					marginTop='25%'
				>I'm also passionate about <br/>
					<Typical
						steps={ [ 'crochet.', 1000, 'cooking.', 1000, 'photography.', 1000, 'travel.', 1000, 'disc golf.', 1000, 'wine.', 1000] }
						loop={ Infinity }
						wrapper='b'
					/>
				</Text>
			
		</Flex>
	);
};

export default About;
