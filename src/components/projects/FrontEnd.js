import React from 'react';
import { frontEnd } from '../../data/frontEnd'

import { FaGithub } from 'react-icons/fa';
import { Flex, Box, Icon, Heading, Link, Text, Image } from '@chakra-ui/core';

import './project_images.css';

const FrontEnd = () => {
	
	return (
		<Box zIndex='.7'
		>
			<Flex
				direction={ ['column', 'column', 'column', 'row'] }
				textAlign='center'
			>
				{ frontEnd.map((project, index) => (
					<Box
						key={ index }
						w={ ['100%', '100%', '100%', '30%'] }
						m={ ['10% 0', '0 2%'] }
						
					>
						<Heading whiteSpace='nowrap'>{ project.name }</Heading>
						<Box
							// position='fixed'
							// id='Images'
							// rounded='md'
							// marginBottom='52%'
					
						>
							<Image objectFit='contain' className='bottom' src={ project.image } />
							
						</Box>
						<Flex
							wrap='wrap'
							justify='center'
							bg='silver'
							rounded='md'
						>
							{ project.skills.map(skill => (
								<Text
									color='black'
									fontSize={ ['sm', 'sm', 'md', 'lg'] }
									m='0 1%'
									p='1%'
								>
									{skill }
								</Text>
							)) }
						</Flex>
						<Flex justify='space-around'
							m='2%'>
							<Link href={ project.links.github } target='_blank'>
								<Box size={ ['1.6rem', '2.2rem'] } as={ FaGithub } m='5%' />
							</Link>
							<Link href={ project.links.site } target='_blank'>
								<Icon
									size={ ['1.6rem', '2.2rem'] }
									name='external-link'
									m='5%'
								/>
							</Link>
						</Flex>
					</Box>
				)) }
			</Flex>

		</Box>
	);
};

export default FrontEnd;
