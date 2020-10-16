import { theme } from "@chakra-ui/core";

export default  {
	...theme,
	fonts: {
		heading: '"Romana", serif',
		body: '"Avenir", sans-serif',
		mono: 'Menlo, monospace',
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.9rem',
		md: '1rem',
		lg: '1.25rem',
		xl: '1.5rem',
		'2xl': '1.75rem',
		'3xl': '2rem',
		'4xl': '2.25rem',
		'5xl': '2.5rem',
		'6xl': '347rem',
	},
	colors: {
        ...theme.colors,
        
	},
	breakpoints: ["480px", "768px", "1025px", "1281px"],
};

