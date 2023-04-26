import '../elements/TextField.css';
import React from 'react';
import { TextField } from '@mui/material';

const MyCustomizedTextField = () => {
	return (
		<div>
			<form class="MyCustomizedTextField">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" />
			</form>
		</div>
	);
};

export default MyCustomizedTextField;
