import React from 'react';
import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
// Image
import './project_images.css';
import d8splash from '../../assets/D8Picker/splash.png';
import d8apply from '../../assets/D8Picker/apply.png';

const D8 = () => {
	return (
		<>
			<Box w='100%'  
			marginBottom={['30%', '35%', '14%', '21%']}
			>
				<Flex
					justify='space-around'
					align='flex-start'
					direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
				>
					<Box
						w={['100%', '100%', '100%', '45%']}
						boxSizing='border-box'
					>
						<Box textAlign='center' lineHeight='2'>
							<Heading>D8Picker</Heading>
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
								<Text w='20%'>Context</Text>
								<Text w='20%'>NodeJS</Text>
								<Text w='20%'>Express</Text>
								<Text w='20%'>KnexJS</Text>
								<Text w='20%'>MongoDB</Text>
								<Text w='20%'>SQL</Text>
								<Text w='20%'>GoogleAPI</Text>
							</Flex>
							<Text
								fontSize={['lg', '2xl']}
								lineHeight='1.6'
								fontStyle='italic'
							>
								Aperiodic Recurrence Calendar Scheduler
							</Text>

							<Flex wrap='wrap' justify='space-around' align='center'>
								<Flex direction='column'>
									<Text fontSize='2xl' fontWeight='bold'>
										Full Stack Developer
									</Text>
									
								</Flex>
								<Box w='100%'>
									<Flex justify='space-around'>
								<Link href='https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1'>
									<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
								</Link>
								<Link href='https://github.com/Labs20-D8Picker'>
									<Box size={['1.6rem', '2.2rem']} as={FaGithub} />
								</Link>
								<Link href='https://labs20d8picker.netlify.app/'>
									<Icon size={['1.6rem', '2.2rem']} name='external-link' />
								</Link>
								</Flex>
								</Box>
							</Flex>
							
						</Box>
					</Box>
					<Box
						position='fixed'
						id='Images'
						marginBottom={['55%', '52%', '52%', '0']}
						w={['100%', '100%', '100%', '45%']}
					>
						<Image className='bottom' src={d8splash} />
						<Image className='top' src={d8apply} />
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default D8;
