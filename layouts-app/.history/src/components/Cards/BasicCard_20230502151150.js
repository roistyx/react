import React from 'react';
import { Box } from '../../layouts/Box';
import './BasicCard.css';

export const BasicCard = ({
	boxMargin,
	bgColor,
	borderRadius,
	gap,
	children,
}) => {
	const style = {
		...(boxMargin ? { '--boxMargin': boxMargin } : {}),
		...(bgColor ? { '--background': bgColor } : {}),
		...(borderRadius ? { '--border-radius': borderRadius } : {}),
		...(gap ? { '--gap': gap } : {}),
	};

	return (
		<Box bgColor="	#00FFFF" borderRadius="10px" gap="1rem">
			<div style={style}>{children}</div>
		</Box>
	);
};
