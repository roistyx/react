import '../elements/TextField.css';
import React from 'react';
import Button from '../elements/Button.js';

const SearchField = () => {
	return (
		<div>
			<form class="text-field">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" />
				<Button>Button</Button>
			</form>
		</div>
	);
};

export default SearchField;
