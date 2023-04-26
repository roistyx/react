import { Button } from '@mui/material';

export const Btn = ({ children }) => {
	return (
		<Button variant="contained" color="primary">
			{' '}
			<span>{children}</span>{' '}
		</Button>
	);
	//<button>{children}</button>;
};
