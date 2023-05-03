import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Between, SpaceEvenly, Center, FlexEnd } from './layouts/Line';
import { Btn } from './elements/Btn';
import { Rows } from './layouts/Line';
import SearchField from './elements/TextField';
import { AlignCenter } from './layouts/Line';
import { Box } from './layouts/Box';
import { Grid } from './layouts/Grid';
import Components from './components/Components';

export default function App() {
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
			<Grid gap="5rem" bgColor="pink">
				<Box>One</Box>
				<Box>Two</Box>
				<Box>Three</Box>
				<Box>Four</Box>
				<Box>Five</Box>
				<Box>Six</Box>
				<Box>Seven</Box>
			</Grid>

			<Routes>
				<Route path="/components" element={<Components></Components>} />
			</Routes>
		</div>
	);
}
