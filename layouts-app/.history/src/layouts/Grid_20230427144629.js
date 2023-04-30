import './Grid.css';

export const Grid = ({ bgColor, gap, children }) => {
	const style = {
		...(bgColor ? { '--background': bgColor } : {}),
		...(gap ? { '--gap': gap } : {}),
	};
	return (
		<div className="Grid" style={style}>
			{children}
		</div>
	);
};
