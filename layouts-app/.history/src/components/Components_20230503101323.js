import React from 'react';
import { Grid } from '../layouts/Grid';
import { Box } from '../layouts/Box';
import BasicCard from '../components/Cards/BasicCard';
import './Components.css';

export default function Components() {
	console.log('Components');
	return (
		<BasicCard
			cardWidth="200px"
			bgColor="pink"
			borderRadius="10px"
			gap="1rem"
			boxMargin="2rem"
		/>
		// <div className="Components">
		// 	<Grid childBbgColor="white" bgColor="grey" gap="1rem">
		// 		<BasicCard
		// 			cardWidth="200px"
		// 			bgColor="pink"
		// 			borderRadius="10px"
		// 			gap="1rem"
		// 			boxMargin="2rem"
		// 		/>
		// 	</Grid>

		// </div>
	);
}
