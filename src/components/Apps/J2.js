import React from 'react';
import { Flex, Box, Image, Icon, Heading, Text, Link } from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
// Image
import './project_images.css';
import vacations from '../../assets/Journey2/vacations.png';
import dates from '../../assets/Journey2/dates.png';

const J2 = () => {
	return (
		<>
			<Box w='100%' marginBottom={['30%', '35%', '14%', '22%']}>
				<Flex
					justify='space-around'
					align='flex-start'
					direction={['column', 'column', 'column', 'row']}
				>
					<Box
						position='fixed'
						id='Images'
						marginBottom={['55%', '52%', '52%', '0']}
						w={['100%', '100%', '100%', '45%']}
					>
						<Image className='bottom' src={vacations} />
						<Image className='top' src={dates} />
					</Box>

					<Box w={['100%', '100%', '100%', '45%']} boxSizing='border-box'>
						<Box textAlign='center' lineHeight='2'>
							<Heading>Journey 2</Heading>
							<Text bg='silver'
								color='black'
								rounded='md'
								fontSize={['sm', 'sm', 'md', 'lg']}
								>React &ensp; NodeJS &ensp; GraphQL &ensp; Prisma &ensp; Apollo &ensp; PostgreSQL &ensp; Material-UI &ensp; Heroku</Text>
							
							<Text
								fontSize={['lg', '2xl']}
								lineHeight='1.6'
								fontStyle='italic'
							>
								Vacation Planner
							</Text>

							<Flex wrap='wrap' justify='space-around' align='center'>
								<Text 
								fontSize={['lg', 'lg', '2xl', '3xl']} fontWeight='bold'>
									Full Stack Developer
								</Text>
								<Box w='100%'>
									<Flex justify='space-around'>
										<Link href='https://www.notion.so/Vacation-Planner-e81c29178ad8410eb10f298e4f6d5860'>
											<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
										</Link>
										<Link href='https://github.com/VacationJourney'>
											<Box size={['1.6rem', '2.2rem']} as={FaGithub} />
										</Link>
										<Link href='https://journey2.netlify.app/'>
											<Icon size={['1.6rem', '2.2rem']} name='external-link' />
										</Link>
									</Flex>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default J2;
