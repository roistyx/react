import './Box.css';

export const Box = ({ bgColor, borderRadius, gap, children }) => {
	const style = {
		...(bgColor ? { '--background': bgColor } : {}),
		...(borderRadius ? { '--border-radius': borderRadius } : {}),
		...(gap ? { '--gap': gap } : {}),
	};

	return (
		<div className="Box" style={style}>
			{children}
		</div>
	);
};
