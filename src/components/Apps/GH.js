import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';

import GitHub from '../../assets/GitHub.png';

const GH = ({ colorMode, fadeIn, fadeOut }) => {
	const fiveRef = useRef(null);
	const interFive = useIntersection(fiveRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	});

	interFive && interFive.intersectionRatio < 0.4
		? fadeOut('.five')
		: fadeIn('.five');

	return (
		<Box ref={fiveRef} w='100%' h={['70vh', '40vh']} marginBottom='13%'>
			<Flex
				direction={['column', 'row']}
				align='center'
				justify='space-evenly'
				className='five'
			>
			<Box 
				borderWidth={colorMode === 'light' ? '': '2px'}
					maxW={['','','','xl']} 
					m={['1% 0', '0 5% ']}>
						<Image src={GitHub}/>
						
					</Box>
				<Box w='100%'>
					<Box textAlign='center' lineHeight='2'>
						<Heading>GitHub User Card</Heading>
						<Box
							lineHeight='1.4'
							p='0 1%'
							background='silver'
							color='black'
							rounded='md'
							fontSize={['sm', 'lg']}
						>
							<Flex wrap='wrap' justify='space-around'>
								<Text w={['30%','25%', '25%', '20%']}>React</Text>
								<Text w={['30%','25%', '25%', '20%']}>Material-UI</Text>
							</Flex>
						</Box>
						<Text fontSize={['lg', '2xl']} lineHeight='1.6' fontStyle='italic'>
							GitHub User Card
						</Text>
						<Box>
							<Flex justify='space-around' align='center'>
								<Text fontSize={['2xl', '3xl']} fontWeight='semibold'>
									Front End Developer
								</Text>
								<Link href='https://github.com/J2Macwilliams/React-Github-User-Card'>
									<Box size={['1.6rem', '2.2rem']} as={FaGithub} />
								</Link>

								<Link href='https://react-github-user-card-git-jeremy-mcwilliams.j2macwilliams.now.sh/'>
									<Icon size={['1.6rem', '2.2rem']} name='external-link' />
								</Link>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default GH;
