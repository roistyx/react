import './Button.css';

export const Button = ({ children }) => {
	const style = {};

	return (
		<button className="Button" style={style}>
			<span>{children}</span>{' '}
		</button>
	);
};
