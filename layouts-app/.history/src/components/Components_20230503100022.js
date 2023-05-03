import React from 'react';
import { Grid } from '../layouts/Grid';
import { Box } from '../layouts/Box';
import BasicCard from '../components/Cards/BasicCard';
import './Components.css';

export default function Components() {
	console.log('Components');
	return (
		<div className="Components">
			<Grid childBbgColor="grey" gap="1rem">
				<BasicCard
					cardWidth="300px"
					bgColor="grey"
					borderRadius="10px"
					gap="1rem"
					boxMargin="1rem"
				/>
			</Grid>
		</div>
	);
}
