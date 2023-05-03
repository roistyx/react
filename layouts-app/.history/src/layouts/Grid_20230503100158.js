import './Grid.css';

export const Grid = ({ bgColor, childBbgColor, gap, children }) => {
	console.log(bgColor, childBbgColor, gap, 'bgColor, gap');
	const style = {
		...(childBbgColor ? { '--childBbgColor': childBbgColor } : {}),
		...(bgColor ? { '--bgColor': bgColor } : {}),
		...(gap ? { '--gap': gap } : {}),
	};
	return (
		<div className="Grid" style={style}>
			{children}
		</div>
	);
};
