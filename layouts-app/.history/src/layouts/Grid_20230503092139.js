import './Grid.css';

export const Grid = ({ bgColor, gap, children }) => {
	console.log(bgColor, gap, 'bgColor, gap');
	const style = {
		...(bgColor ? { '----bgColor': bgColor } : {}),
		...(gap ? { '--gap': gap } : {}),
	};
	return (
		<div className="Grid" style={style}>
			{children}
		</div>
	);
};
