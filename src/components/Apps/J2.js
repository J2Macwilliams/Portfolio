import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Flex, Box, Image, Heading, Text, Link } from '@chakra-ui/core';
import { SiNotion } from 'react-icons/si';
// Image
import './project_images.css';
import vacations from '../../assets/Journey2/vacations.png';
import dates from '../../assets/Journey2/dates.png';
// import Journey2 from '../../assets/Journey2.jpeg';

const J2 = ({ colorMode, fadeIn, fadeOut }) => {
	const threeRef = useRef(null);
	const interThree = useIntersection(threeRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	});
	interThree && interThree.intersectionRatio < 0.4
		? fadeOut('.three')
		: fadeIn('.three');
	return (
		<>
			<Box ref={threeRef} w='100%' h={['70vh', '35vh']} marginBottom={['-15%','13%']}>
				<Flex direction={['column', 'row']} justify='space-evenly'>
					<Box
						className='three'
						id='Images'
						size={['', '2xl', '4xl', '6xl']}
						m={['0 0 55% ', '0 5% ']}
					>
						<Image className='bottom' src={vacations} />
						<Image className='top' src={dates} />
					</Box>
					<Box w='100%' className='three'>
						<Box textAlign='center' lineHeight='2'>
							<Heading>Journey 2</Heading>
							<Box
								lineHeight='1.4'
								paddingRight='1.5%'
								bg='silver'
								color='black'
								rounded='md'
								fontSize={['sm', 'lg']}
							>
								<Flex wrap='wrap' justify='space-around'>
									<Text w={['20%', '10%']}>React</Text>
									<Text w={['20%', '10%']}>Prisma</Text>
									<Text w={['20%', '10%']}>Apollo </Text>
									<Text w={['20%', '10%']}>Docker</Text>
									<Text w={['20%', '10%']}>MongoDB</Text>
								</Flex>
							</Box>
							<Text
								fontSize={['lg', '2xl']}
								lineHeight='1.6'
								fontStyle='italic'
							>
								Vacation Event Planner
							</Text>
							<Box>
								<Flex wrap='wrap' justify='space-around' align='center'>
									<Text fontSize={['2xl', '3xl']} fontWeight='semibold'>
										Full Stack GraphQL Architect
									</Text>
									<Link href='https://www.notion.so/Vacation-Planner-e81c29178ad8410eb10f298e4f6d5860'>
										<Box size={['1.6rem', '2.2rem']} as={SiNotion} />
									</Link>

									{/* <Link href=''>
										<Icon size={['1.6rem', '2.2rem']} name='external-link' />
									</Link> */}
								</Flex>
							</Box>
						</Box>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default J2;
