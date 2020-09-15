import React from 'react';

import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
// Image
import './project_images.css';
import splash from '../../assets/Garden/splash.png';
import courses from '../../assets/Garden/courses.png';

const GOK = () => {
	return (
		<Box
			w='100%'
			marginTop={[0,0, 0, '-14%']}
			marginBottom={['30%', '35%', '14%', '20%']}
		>
			<Flex
				justify='space-around'
				align='flex-start'
				direction={['column', 'column', 'column', 'row']}
			>
				<Box
					id='Images'
					marginBottom={['55%', '52%', '52%', '0']}
					w={['100%', '100%', '100%', '45%']}
				>
					<Image className='bottom' src={splash} />
					<Image className='top' src={courses} />
				</Box>

				<Box w={['100%', '100%', '100%', '45%']} boxSizing='border-box'>
					<Box textAlign='center' lineHeight='2'>
						<Heading>Garden Of Knowledge</Heading>
						<Text bg='silver'
								color='black'
								rounded='md'
								fontSize={['sm', 'sm', 'md', 'lg']}
								>React &ensp; Redux &ensp; NodeJS &ensp; ExpressJS &ensp; KnexJS &ensp; PostgreSQL &ensp; SCSS &ensp; AWS </Text>
					
						<Text fontSize={['lg', '2xl']} lineHeight='1.6' fontStyle='italic'>
							Learning Management System
						</Text>

						<Flex wrap='wrap' justify='space-around' align='center'>
							<Text fontSize={['lg', 'lg', '2xl', '3xl']} fontWeight='bold'>
								Team Lead / Full Stack Developer
							</Text>

							<Box w='100%'>
								<Flex justify='space-around'>
									<Link href='https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818'>
										<Box size={['1.6rem', '2.2rem']} as={SiNotion} m='5%' />
									</Link>
									<Link href='https://github.com/Labs24GOK'>
										<Box size={['1.6rem', '2.2rem']} as={FaGithub} m='5%' />
									</Link>
									<Link href='https://gardenofknowledge.netlify.app/'>
										<Icon
											size={['1.6rem', '2.2rem']}
											name='external-link'
											m='5%'
										/>
									</Link>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default GOK;
