import React from 'react';

import { Flex, Box, Image, Heading, Text, Icon, Link } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';

import GitHub from '../../assets/GitHub.png';

const GH = () => {
	return (
		<>
			<Box w='100%' 
			marginBottom={['30%', '35%', '14%', '26%']}
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
						<Image className='bottom' src={GitHub} />
					</Box>

					<Box w={['100%', '100%', '100%', '45%']} boxSizing='border-box'>
						<Box textAlign='center' lineHeight='2'>
							<Heading>GitHub User Card</Heading>
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
								<Text w='20%'>Material-UI</Text>
							</Flex>

							<Flex wrap='wrap' justify='space-around' align='center'>
								<Text fontSize='2xl' fontWeight='bold'>
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
				</Flex>
			</Box>
		</>
	);
};

export default GH;
