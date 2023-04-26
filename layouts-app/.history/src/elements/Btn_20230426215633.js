import { Button } from '@mui/material';

export const Btn = ({ children }) => {
	return (
		<button class="">
			<span>{children}</span>{' '}
		</button>
		// <Button variant="contained" color="primary">
		// 	{' '}
		// 	<span>{children}</span>{' '}
		// </Button>
	);
};
