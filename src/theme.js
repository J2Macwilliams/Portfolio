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
		lg: '1.15rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '4rem',
	},
	colors: {
        ...theme.colors,
        
	},
};

