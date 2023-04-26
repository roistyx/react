import React from 'react';
import { Between } from './components/Line';
import { Btn } from './elements/Btn';
import { AlignCenter } from './components/Line';
import MyCustomizedTextField from './elements/TextField';

export default function App() {
	return (
		<div>
			<Between>
				<Btn>Button</Btn>
				<Btn>Button</Btn>
			</Between>
			<AlignCenter>
				<MyCustomizedTextField />
			</AlignCenter>
		</div>
	);
}
