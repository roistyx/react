import React from 'react';
import { Between, SpaceEvenly, Center } from './layouts/Line';
import { Btn } from './elements/Btn';
import { Rows } from './layouts/Line';
import SearchField from './elements/TextField';
import { AlignCenter } from './layouts/Line';
import { Box } from './layouts/Box';

export default function App() {
	return (
		<div>
			<Between>
				<Btn>Button</Btn>
				<Btn>Button</Btn>
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
			<SpaceEvenly>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
				</Box>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
				</Box>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
					<Btn>Button</Btn>
				</Box>
				<Box bgColor="pink" borderRadius="10px" gap="3rem">
					<span>Hello World!</span>
					<Btn>Button</Btn>
				</Box>
			</SpaceEvenly>
			<Center>
				<Btn>Button</Btn>
			</Center>
		</div>
	);
}
