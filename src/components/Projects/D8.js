import React, {useRef} from 'react'
import { useIntersection } from 'react-use';
import {Flex, Box, Image, Heading, Text, Icon, Link} from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
// Image
import D8Picker from '../../assets/D8Picker.jpeg';

const D8 = ({colorMode, fadeIn, fadeOut}) => {
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
		<Box ref={twoRef} w='100%' 
		h = {['70vh', '35vh']}
		 marginBottom='15%'
		 
		>
					<Flex
						direction={['column-reverse', 'row']}
						align='center'
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
								<Text fontSize={['lg', '2xl']} lineHeight='1.6' fontStyle='italic'>
									Aperiodic Recurrence Calendar Scheduler
								</Text>
								<Box>
									<Flex justify='space-around' align='center'>
										<Text fontSize={['2xl', '3xl']} fontWeight='semibold'>
											Full Stack Developer
										</Text>
										<Link href=''>
											<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
										</Link>

										<Link href=''>
											<Icon size={['1.6rem', '2.2rem']} name='external-link' />
										</Link>
									</Flex>
								</Box>
							</Box>
						</Box>
						<Box
							maxW={['80%', '25%']}
							rounded='lg'
							overflow='hidden'
							bg={colorMode === 'light' ? 'white' : ''}
							m='2%'
							textAlign='center'
						>
							<Image
								objectFit='cover'
								src={D8Picker}
								alt='Garden of Knowledge Logo'
							/>
						</Box>
					</Flex>
				</Box></>
    )
}

export default D8
