import { Route, Routes } from 'react-router-dom';

import Components from './components/Components';
import Layouts from './layouts/Layouts';

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="layouts" element={<Layouts />} />
				<Route path="/components" element={<Components />} />
			</Routes>
		</div>
	);
}
