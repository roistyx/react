import React from 'react';
import { Grid } from '../layouts/Grid';
import { Box } from '../layouts/Box';
import BasicCard from '../components/Cards/BasicCard';
import './Components.css';

export default function Components() {
	console.log('Components');
	return (
		<div className="Components">
			<Grid gap="1rem" bgColor="grey">
				<BasicCard
					bgColor="#"
					borderRadius="10px"
					gap="1rem"
					boxMargin="1rem"
				/>
			</Grid>
		</div>
	);
}