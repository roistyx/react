import './Button.css';
import Button from '@mui/material/Button';
export const Btn = ({ children }) => {
	const style = {};

	return (
		<button className="Button" style={style}>
			<span>{children}</span>{' '}
		</button>
	);
};
