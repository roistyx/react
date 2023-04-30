import React from 'react';
import { Between } from './layouts/Line';
import { Btn } from './elements/Btn';
import { Rows } from './layouts/Line';
import SearchField from './elements/TextField';
import { AlignCenter } from './layouts/Line';

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
		</div>
	);
}
