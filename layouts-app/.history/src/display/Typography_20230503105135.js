import React from 'react';
import './Typography.css';

export default function Typography({
	FontFamily,
	fontSize,
	fontColor,
	fontWeight,
	lineHeight,
	letterSpacing,
	children,
}) {
	const style = {
		...(FontFamily ? { '--FontFamily': FontFamily } : {}),
		...(fontSize ? { '--fontSize': fontSize } : {}),
		...(fontColor ? { '--fontColor': 'green' } : {}),
		...(fontWeight ? { '--fontWeight': fontWeight } : {}),
		...(lineHeight ? { '--lineHeight': lineHeight } : {}),
		...(letterSpacing ? { '--letterSpacing': letterSpacing } : {}),
	};
	return (
		<div className="Typography" style={style}>
			{children}
		</div>
	);
}
