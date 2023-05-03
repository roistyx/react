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
				<Typography
					FontFamily="Roboto"
					fontSize="1.5rem"
					fontColor="#747474"
					fontWeight="bold"
					lineHeight="1.5"
					letterSpacing="0.00938em"
					gutterBottom="true"
				>
					Word of the day
				</Typography>
			</span>
		</Box>
	);
};

export default BasicCard;
