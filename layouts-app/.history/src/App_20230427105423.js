import React from 'react';
import { Between } from './layouts/Line';
import { Btn } from './elements/Btn';
import { Rows } from './layouts/Line';
import SearchField from './elements/TextField';
import { AlignCenter } from './layouts/Line';
import { Box } from './layouts/Box';
import { Center } from './layouts/Line';

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
			<Rows>
				<AlignCenter>
					<Box bgColor="pink" borderRadius="10px" gap="3rem">
						<span>Hello World!</span>
					</Box>
				</AlignCenter>
			</Rows>
			<Center>
				<Btn>Button</Btn>
				<Btn>Button</Btn>
			</Center>
		</div>
	);
}
