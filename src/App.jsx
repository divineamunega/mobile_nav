import { useEffect, useState } from "react";

const navigation = [
	{ title: "Home", url: "/home" },
	{
		title: "Products",
		children: [
			{ title: "Men", url: "products/men" },
			{ title: "Women", url: "products/women" },
			{
				title: "Electronics",
				children: [
					{ title: "Phones", url: "products/electronics/phones" },
					{ title: "Laptops", url: "products/electronics/laptops" },
				],
			},
		],
	},

	{
		title: "Services",
		children: [
			{ title: "Some Day Delivery", url: "services/some-day-delivery" },
			{ title: "Customized Services", url: "services/cusomized-services" },
		],
	},

	{ title: "About", url: "/about" },
	{ title: "Contact", url: "/contact" },
	{ title: "Address", url: "/address" },
];
const App = () => {
	const [title, setTitle] = useState("");
	const [navLocation, setNavLocation] = useState([]);
	const [navigationState, setNavigation] = useState(navigation);

	useEffect(() => {
		if (navLocation.length === 0) {
			setNavigation(navigation);
			setTitle(navigation[0].title);
			return;
		}

		if (navLocation.length > 0) {
			let tempNav = navigation;
			let currentTitle;
			navLocation.forEach((el, i) => {
				currentTitle = tempNav[el].title;
				tempNav = tempNav[el].children;
			});
			setNavigation(tempNav);
			setTitle(currentTitle);
		}
	}, [navLocation, navigationState]);
	return (
		<div>
			<div className="navigation">
				<div>{title}</div>
				{navLocation.length > 0 ? (
					<>
						<button
							onClick={() => {
								setNavLocation((loc) =>
									loc.filter((el, i) => i !== loc.length - 1)
								);
							}}
						>
							Back
						</button>
						<br /> <br />
					</>
				) : null}
				{navigationState.map((feild, id) => {
					if (feild.children) {
						return (
							<button
								onClick={() => {
									setTitle(feild.title);
									setNavLocation((loc) => [...loc, id]);
								}}
								key={id}
							>
								{feild.title} {">"}
							</button>
						);
					}
					return (
						<button
							onClick={() => {
								setTitle(feild.title);
							}}
							key={id}
						>
							{feild.title}
						</button>
					);
				})}
			</div>
		</div>
	);
};
export default App;
