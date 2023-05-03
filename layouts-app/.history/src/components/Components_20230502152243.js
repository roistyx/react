import React from 'react';
import { Grid } from '../layouts/Grid';
import { Box } from '../layouts/Box';
import BasicCard from '../components/Cards/BasicCard';
import './Components.css';

export default function Components() {
	console.log('Components');
	return (
		<Grid gap="1rem" bgColor="pink">
			Hello World!
			{/* <Box>
				<BasicCard
					bgColor="#"
					borderRadius="10px"
					gap="1rem"
					boxMargin="1rem"
				/>
			</Box> */}
			<Box>Two</Box>
			<Box>Three</Box>
			<Box>Four</Box>
			<Box>Five</Box>
			<Box>Six</Box>
			<Box>Seven</Box>
		</Grid>
	);
}
