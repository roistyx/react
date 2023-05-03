import React from 'react';
import { Grid } from '../layouts/Grid';
import { Box } from '../layouts/Box';
import BasicCard from '../components/Cards/BasicCard';
import './Components.css';

export default function Components() {
	console.log('Components');
	return (
		<div className="Components">
			<Grid childBbgColor="grey" bgColor="grey" gap="1rem">
				<BasicCard
					cardWidth="275px"
					bgColor="#E7EBF0"
					borderRadius="10px"
					gap="1rem"
					boxMargin="2rem"
				/>
			</Grid>
		</div>
	);
}
