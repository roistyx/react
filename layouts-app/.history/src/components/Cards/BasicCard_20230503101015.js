import React from 'react';
import { Box } from '../../layouts/Box';
import './BasicCard.css';

const BasicCard = ({
	cardWidth,
	boxMargin,
	bgColor,
	borderRadius,
	gap,
	children,
}) => {
	const style = {
		...(cardWidth ? { '--cardWidth': cardWidth } : {}),
		...(boxMargin ? { '--boxMargin': boxMargin } : {}),
		// ...(bgColor ? { '--bgColor': 'red' } : {}),
		...(borderRadius ? { '--border-radius': borderRadius } : {}),
		...(gap ? { '--gap': gap } : {}),
	};

	return (
		// <Box bgColor="pink">
		<div style={style}>{children}Hello World</div>
		// </Box>
	);
};

export default BasicCard;
