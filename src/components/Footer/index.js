import React, {useEffect} from 'react';
import { loadCSS } from 'fg-loadcss';
// import emailjs from 'emailjs-com';
import { Box, Icon} from '@material-ui/core'
import {useStyles} from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// import {
// 	Input,
// 	Textarea,
// 	Box,
// 	useColorMode,
// 	Flex,
// 	Link,
// 	Modal,
// 	ModalOverlay,
// 	ModalContent,
// 	ModalHeader,
// 	ModalFooter,
// 	ModalBody,
// 	ModalCloseButton,
// 	Button,
// 	useDisclosure,
// } from '@chakra-ui/core';
// import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import classes from '*.module.css';
// import { GrMail } from 'react-icons/gr';

const Footer = () => {
	const classes = useStyles()
	// const { colorMode } = useColorMode();
	// const { isOpen, onOpen, onClose } = useDisclosure();

	// const sendEmail = e => {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm(
	// 			'gmail',
	// 			'jeremytemplate',
	// 			e.target,
	// 			`${process.env.REACT_APP_EMAIL_KEY}`
	// 		)
	// 		.then(
	// 			result => {
	// 				console.log(result.text);
	// 			},
	// 			error => {
	// 				console.log(error.text);
	// 			}
	// 		);
	// 	// onClose();
	// };
	useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
	return (
		<Box
		className={classes.foot}
			// bg={colorMode === 'light' ?  '#363636': '#f2f2f2' }
			
			
			// color={colorMode === 'light' ?   '#f2f2f2' : '#363636'}
		>
			<Box className={classes.root}>
			{/* <Flex justify='space-around'> */}
				{/* <Link href='https://github.com/J2Macwilliams'target='_blank'> */}
					{/* <Icon className='fa fa-github' /> */}
					<GitHubIcon />
				{/* </Link> */}
				{/* <Link href='https://www.linkedin.com/in/jeremyjmcwilliams/' target='_blank'> */}
					{/* <Icon className='fa fa-linkedin'  /> */}
					<LinkedInIcon />
				{/* </Link> */}
				{/* <Link href='https://twitter.com/McWilliamJJ1' target='_blank'> */}
					<Icon className='fa FaTwitter'  />
				{/* </Link> */}
			</Box>
				
				{/* <Modal isOpen={isOpen} onClose={onClose}>
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
				</Modal> */}
			{/* </Flex> */}
			{/* </Box> */}
		</Box>
	);
};

export default Footer;
