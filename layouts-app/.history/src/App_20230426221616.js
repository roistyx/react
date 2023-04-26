import React from 'react';
import { Between } from './components/Line';
import { Btn } from './elements/Btn';
import { Rows } from './components/Line';
import { TextField } from './elements/TextField';

export default function App() {
	return (
		<div>
			<Between>
				<Btn>Button</Btn>
				<Btn>Button</Btn>
			</Between>
			<Rows>
				<TextField />
			</Rows>
		</div>
	);
}
