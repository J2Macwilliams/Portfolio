import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';

const Home = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Flex direction='column'>
				<Box
					w='100%'
					h={[1250, 1300, 1400, 1800]}
					background={
						colorMode === 'light'
							? 'linear-gradient(350deg, rgba(255,219,121,1) 0%, rgba(249,247,244,1) 100%)'
							: 'linear-gradient(195deg, rgba(0,0,0,1) 31%, rgba(39,101,88,1) 100%)'
					}
				></Box>
			</Flex>
		</>
	);
};

export default Home;
