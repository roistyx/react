import './Grid.css';

export const Grid = ({ gap, children }) => {
	const style = {
		...(gap ? { '--gap': gap } : {}),
	};
	return (
		<div className="Grid" style={style}>
			{children}
		</div>
	);
};
