import './Button.css';

const Button = ({
	buttonPadding,
	fontSize,
	bgColor,
	fontColor,
	bgColorHover,
	textTransform,
	children,
}) => {
	const style = {
		...(buttonPadding ? { '--buttonPadding': buttonPadding } : {}),
		...(fontSize ? { '--fontSize': fontSize } : {}),
		...(bgColor ? { '--bgColor': bgColor } : {}),
		...(fontColor ? { '--fontColor': fontColor } : {}),
		...(bgColorHover ? { '--bgColorHover': bgColorHover } : {}),
		...(textTransform ? { '--textTransform': textTransform } : {}),
	};

	return (
		<button className="Button" style={style}>
			<span>{children}</span>{' '}
		</button>
	);
};

export default Button;
