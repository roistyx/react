import './Button.css';

const Button = ({ children }) => {
	const style = {};

	return (
		<button className="Button" style={style}>
			<span>{children}</span>{' '}
		</button>
	);
};

export default Button;
