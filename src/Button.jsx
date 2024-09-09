const Button = ({ onClick, id, children }) => {
	return (
		<button onClick={onClick} key={id}>
			{children}
		</button>
	);
};

export default Button;
