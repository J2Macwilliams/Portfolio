import React from 'react';

import emailjs from 'emailjs-com';

import {
	Input,
	Textarea,
	Box,
	useColorMode,
	Flex,
	Link,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from '@chakra-ui/core';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
	const { colorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'jeremytemplate',
				e.target,
				`${process.env.REACT_APP_EMAIL_KEY}`
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		onClose();
	};

	return (
		<Box
			bg={colorMode === 'light' ? 'black' : 'white'}
			w='100%'
			p='1%'
			position='fixed'
			// zIndex='1'
			left='0px'
			bottom='0px'
			// m='.5%'
			color={colorMode === 'light' ? 'white' : 'black'}
		>
			{/* <Box > */}
			<Flex justify='space-around'>
				<Link href='https://github.com/J2Macwilliams'>
					<Box size={['1.6rem', '2.2rem']} as={FaGithub} />
				</Link>
				<Link href='https://www.linkedin.com/in/jeremy-mcwilliams/'>
					<Box size={['1.6rem', '2.2rem']} as={FaLinkedinIn} />
				</Link>

				<Box onClick={onOpen} size={['1.6rem', '2.2rem']} as={GrMail} />
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent
						background={
							colorMode === 'light'
								? ''
								: 'linear-gradient(52deg, rgba(52,52,52,1) 0%, rgba(124,124,124,1) 100%)'
						}
						maxW={'sm'}
					>
						<ModalHeader color={colorMode === 'light' ? '' : 'white'}>
							Contact Me
						</ModalHeader>
						<ModalCloseButton
							bg='black'
							color='white'
							_hover={{ bg: 'white', color: 'black' }}
						/>
						<ModalBody>
							<Box
								background={colorMode === 'light' ? '' : 'black'}
								textAlign='center'
								rounded='lg'
								w='100%'
							>
								<Flex direction='column'>
									<form onSubmit={sendEmail}>
										<Input
											required
											variant='outline'
											type='text'
											placeholder='Name'
											name='name'
										/>
										<Input
											required
											variant='outline'
											type='text'
											placeholder='Subject'
											name='subject'
										/>
										<Input
											required
											variant='outline'
											type='email'
											placeholder='Email'
											name='email'
										/>
										<Textarea
											required
											type='text'
											variant='outline'
											name='message'
											placeholder='Message'
										/>

										<Button
											bg='black'
											border={colorMode === 'light' ? '' : '1px solid white'}
											color='white'
											_hover={{ bg: 'silver' }}
											type='submit'
											value='Send'
											w='100%'
										>
											Submit
										</Button>
									</form>
								</Flex>
							</Box>
						</ModalBody>

						<ModalFooter>
							<Button bg='black' color='white' mr={3} onClick={onClose}>
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Flex>
			{/* </Box> */}
		</Box>
	);
};

export default Footer;
