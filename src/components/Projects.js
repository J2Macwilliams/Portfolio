import React, {useRef} from 'react';
import { useIntersection } from 'react-use';
// import { Flex } from '@chakra-ui/core';
import gsap from 'gsap';
const Projects = () => {
	
	const sectionRef = useRef(null);
	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '400px',
		threshold: 1,
	});

	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			y: -60,
			ease: 'power4.out',
			stagger: {
				amount: 0.3,
			},
		});
	};

	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 0,
			y: -20,
			ease: 'power4.out',
		});
	};
	return (
		<>
		
		</>
	);
};

export default Projects;

