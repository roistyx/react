import React from 'react';
import { Between } from './components/Line';
import { Btn } from './elements/Btn';
import { Rows } from './components/Line';
import SearchField from './elements/TextField';
import { AlignCenter } from './components/Line';

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
