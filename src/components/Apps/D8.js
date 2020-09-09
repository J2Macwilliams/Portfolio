import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
// Image
import './project_images.css';
import d8splash from '../../assets/D8Picker/splash.png';
import d8apply from '../../assets/D8Picker/apply.png';

const D8 = ({ colorMode, fadeIn, fadeOut }) => {
	const twoRef = useRef(null);
	const interTwo = useIntersection(twoRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	});

	interTwo && interTwo.intersectionRatio < 0.4
		? fadeOut('.two')
		: fadeIn('.two');
	return (
		<>
			<Box ref={twoRef} w='100%' h={['70vh', '35vh']} marginBottom={['-15%', '13%']}>
				<Flex
					direction={['column-reverse', 'row']}
					// align='center'
					justify='space-evenly'
					className='two'
				>
					<Box w='100%'>
						<Box textAlign='center' lineHeight='2'>
							<Heading>D8Picker</Heading>
							<Box
								lineHeight='1.4'
								p='0 1%'
								background='silver'
								color='black'
								rounded='md'
								fontSize={['sm', 'lg']}
							>
								<Flex wrap='wrap' justify='space-around'>
									<Text w={['20%', '10%']}>React</Text>
									<Text w={['20%', '10%']}>Context</Text>
									<Text w={['20%', '10%']}>NodeJS</Text>
									<Text w={['20%', '10%']}>Express</Text>
									<Text w={['20%', '10%']}>KnexJS</Text>
									<Text w={['20%', '10%']}>MongoDB</Text>
									<Text w={['20%', '10%']}>SQL</Text>
									<Text w={['20%', '10%']}>GoogleAPI</Text>
								</Flex>
							</Box>
							<Text
								fontSize={['lg', '2xl']}
								lineHeight='1.6'
								fontStyle='italic'
							>
								Aperiodic Recurrence Calendar Scheduler
							</Text>
							<Box>
								<Flex justify='space-around' align='center'>
									<Text fontSize={['2xl', '3xl']} fontWeight='semibold'>
										Full Stack Developer
									</Text>
									<Link href='https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1'>
										<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
									</Link>

									<Link href='https://labs20d8picker.netlify.app/'>
										<Icon size={['1.6rem', '2.2rem']} name='external-link' />
									</Link>
								</Flex>
							</Box>
						</Box>
					</Box>
					<Box id='Images' 
					size={['','2xl','4xl','6xl']} 
					m={['0 0 55% ', '0 5% ']}>
						<Image className='bottom' src={d8splash}/>
						<Image className='top' src={d8apply} />
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default D8;
