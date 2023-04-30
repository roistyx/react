import './Box.css';

export const Box = ({ bgColor, borderRadius, children }) => {
	console.log('bgColor', { bgColor });
	const style = {
		...(bgColor ? { '--background': bgColor } : {}),
		...(borderRadius ? { '--border-radius': borderRadius } : {}),
	};

	return (
		<div className="Box" style={style}>
			{children}
		</div>
	);
};
