import React from 'react';
import { Box } from '../../layouts/Box';
import './BasicCard.css';
import Typography from '../../display/Typography';
import Button from '../../elements/Button';

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
					fontSize="1rem"
					fontColor="#ABABAB"
					fontWeight="light"
					lineHeight="1.5"
					letterSpacing="0.00938em"
					marginBottom="0.35em"
				>
					Word of the day
				</Typography>
				<Typography
					FontFamily="Roboto"
					fontSize="1.5rem"
					fontColor="#212121"
					fontWeight="400"
					lineHeight="1.5"
					letterSpacing="0"
					marginBottom="0"
				>
					anth•ro•po•sophy
				</Typography>
				<Typography
					FontFamily="Roboto"
					fontSize="1rem"
					fontColor="#666666"
					fontWeight="400"
					lineHeight="1.5"
					letterSpacing="0.00938em"
					marginBottom="12px"
				>
					noun
				</Typography>
				<Typography
					FontFamily="Roboto"
					fontSize="1rem"
					fontColor="#212121"
					fontWeight="400"
					lineHeight="1.5"
					letterSpacing="0.0.01071em"
					marginBottom="20px"
				>
					Knowledge of the nature of man; hence, human wisdom.
				</Typography>
				<Button
					buttonPadding={'5rem 0.5rem 1 0.5'}
					fontSize={'0.875rem'}
					bgColor={'white'}
					fontColor={'#1976D2'}
					bgColorHover="#F6FAFE"
					textTransform="uppercase"
				>
					Read more
				</Button>
			</span>
		</Box>
	);
};

export default BasicCard;
