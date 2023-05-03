import React from 'react';
import {
	Between,
	SpaceEvenly,
	Center,
	FlexEnd,
	Rows,
	AlignCenter,
} from './Line';
import { Btn } from '../elements/Btn';
import SearchField from '../elements/TextField';
import { Box } from './Box';
import { Grid } from './Grid';

export default function Layouts() {
	return (
		<div>
			<Between>
				<Box bgColor="	#00FFFF" borderRadius="10px" gap="1rem" boxMargin="1rem">
					<span>I'm a box Start</span>
				</Box>
				<Box bgColor="	#00FFFF" borderRadius="10px" gap="1rem">
					<span>I'm a box Center</span>
				</Box>
				<Box bgColor="	#00FFFF" borderRadius="10px" gap="1rem">
					<span>I'm a box End</span>
				</Box>
			</Between>
			<Rows>
				<AlignCenter>
					<SearchField />
				</AlignCenter>
			</Rows>
			<Center>
				<Box bgColor="grey" borderRadius="10px" gap="1rem">
					<span>Hello World!</span>
				</Box>
			</Center>
			<FlexEnd>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
				</Box>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
				</Box>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
				</Box>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
				</Box>
			</FlexEnd>
			<Center>
				<Btn>Button</Btn>
			</Center>
			<Grid bgColor="green" gap="5rem">
				<span>One</span>
				<Box>Two</Box>
				<Box>Three</Box>
				<Box>Four</Box>
				<Box>Five</Box>
				<Box>Six</Box>
				<Box>Seven</Box>
			</Grid>
		</div>
	);
}
