import React from 'react';
import { Box } from '../../layouts/Box';
import './BasicCard.css';
import Typography from '../../display/Typography';

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
		...(bgColor ? { '--bgColor': bgColor } : {}),
		...(borderRadius ? { '--border-radius': borderRadius } : {}),
		...(gap ? { '--gap': gap } : {}),
	};

	return (
		<Box>
			<span className="BasicCard" style={style}>
				<Typography fontSize="14" color="grey" gutterBottom>
					Word of the day
				</Typography>
			</span>
		</Box>
	);
};

export default BasicCard;
