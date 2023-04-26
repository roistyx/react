import React from 'react';
import { Between } from './components/Line';
import { Btn } from './elements/Btn';

export default function App() {
	return (
		<div>
			<Between>
				<Btn>Button</Btn>
				<Btn>Button</Btn>
			</Between>
		</div>
	);
}
