import './Box.css';

export const Box = ({ boxMargin, bgColor, borderRadius, gap, children }) => {
	const style = {
		...(boxMargin ? { '--boxMargin': boxMargin } : {}),
		...(bgColor ? { '--bgColor': 'blue' } : {}),
		...(borderRadius ? { '--border-radius': borderRadius } : {}),
		...(gap ? { '--gap': gap } : {}),
	};

	return (
		<div className="Box" style={style}>
			{children}
		</div>
	);
};
