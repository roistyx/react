import React from 'react';
import './Typography.css';

export default function Typography({
	FontFamily,
	fontSize,
	fontColor,
	fontWeight,
	lineHeight,
	letterSpacing,
	marginBottom,
	children,
}) {
	const style = {
		...(FontFamily ? { '--FontFamily': FontFamily } : {}),
		...(fontSize ? { '--fontSize': fontSize } : {}),
		...(fontColor ? { '--fontColor': fontColor } : {}),
		...(fontWeight ? { '--fontWeight': fontWeight } : {}),
		...(lineHeight ? { '--lineHeight': lineHeight } : {}),
		...(letterSpacing ? { '--letterSpacing': letterSpacing } : {}),
		...(marginBottom ? { '--marginBottom': marginBottom } : {}),
	};
	return (
		<div className="Typography" style={style}>
			{children}
		</div>
	);
}
