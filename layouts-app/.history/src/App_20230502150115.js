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
import Layouts from './layouts/Layouts';

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="layouts" element={<Layouts />} />
				<Route path="/components" element={<Components>Hi</Components>} />
			</Routes>
		</div>
	);
}
