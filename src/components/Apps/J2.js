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
			<Box w='100%' 
			marginBottom={['30%', '35%', '14%', '22%']}
			>
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
							<Flex
								wrap='wrap'
								justify='space-around'
								lineHeight='1.4'
								bg='silver'
								color='black'
								rounded='md'
								fontSize={['sm', 'sm', 'md', 'lg']}
							>
								<Text w='20%'>React</Text>
								<Text w='20%'>Prisma</Text>
								<Text w='20%'>Apollo</Text>
								<Text w='20%'>Heroku</Text>
								<Text w='30%'>Material-UI</Text>
							</Flex>
							<Text
								fontSize={['lg', '2xl']}
								lineHeight='1.6'
								fontStyle='italic'
							>
								Vacation Planner
							</Text>

							<Flex wrap='wrap' justify='space-around' align='center'>
								<Text fontSize='2xl' fontWeight='bold'>
									Full Stack Developer
								</Text>

								<Link href='https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1'>
									<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
								</Link>
								<Link href='https://github.com/VacationJourney'>
									<Box size={['1.6rem', '2.2rem']} as={FaGithub} />
								</Link>
								{/* <Link href='https://labs20d8picker.netlify.app/'>
									<Icon size={['1.6rem', '2.2rem']} name='external-link' />
								</Link> */}
							</Flex>
						</Box>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default J2;
