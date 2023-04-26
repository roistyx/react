import './Line.css';

export const Line = ({ children, addClass }) => {
	return <div className={`Line ${addClass || ''}`}>{children}Hello World!</div>;
};

export const Between = (props) => {
	return <Line {...props} addClass="between" />;
};

export const Rows = (props) => {
	return <Line {...props} addClass="rows" />;
};

export const AlignStart = ({ children }) => {
	return <div className="AlignStart">{children}</div>;
};
