import './Btn.css';
export const Btn = ({ children }) => {
	const style = {};

	return (
		<button className="Btn" style={style}>
			<span>{children}</span>{' '}
		</button>
	);
};
