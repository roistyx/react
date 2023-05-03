import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '../layouts/Grid';
import { Box } from '../layouts/Box';

export default function Components() {
	return (
		<Grid gap="5rem" bgColor="pink">
			<Box>One</Box>
			<Box>Two</Box>
			<Box>Three</Box>
			<Box>Four</Box>
			<Box>Five</Box>
			<Box>Six</Box>
			<Box>Seven</Box>
		</Grid>
	);
}
