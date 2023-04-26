import '../elements/TextField.css';
import React from 'react';
import { TextField } from '@mui/material';

const MyTextField = () => {
	return (
		<div>
			<form class="custom-textfield">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" />
			</form>
		</div>
	);
};

export default MyTextField;
