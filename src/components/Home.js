import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';

const Home = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Flex direction='column' justify='center' align='center'>
				<Box
					w='100%'
					h='200vh'
					p={['12%', '10%', '8%', '7%']}
					background={
						colorMode === 'light'
							? 'linear-gradient(195deg, rgba(227,227,227,1) 0%, rgba(255,253,253,1) 21%, rgba(250,248,216,1) 42%, rgba(245,221,104,1) 79%, rgba(251,164,5,1) 100%)'
							: 'linear-gradient(195deg, rgba(0,0,0,1) 0%, rgba(8,3,106,1) 85%, rgba(3,38,144,1) 100%)'
					}
				>
					<Flex justify='space-around' align='center' direction='column'>
						<Box h='100vh'>Jeremy McWilliams</Box>
						<Box h={['90vh', '90vh' , '85vh', '80vh']}>About</Box>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default Home;
