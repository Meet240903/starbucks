import React from "react";
import "../../assets/styles/home/home.css"; // External CSS file for styling
import img1 from "../../assets/images/home/pumpkin.jpg";
import img2 from "../../assets/images/home/ice.webp";
import img3 from "../../assets/images/home/bunch.webp";
import img4 from "../../assets/images/home/spicefully.jpg";
import img5 from "../../assets/images/home/cup.jpg";

const Home = () => {
	const rowsData = [
		{
			imgSrc: img1,
			heading: "It’s a pumpkin party",
			description:
				"The season’s favorite makes fall fall. Enjoy the moment—hot, iced or blended.",
			buttonText: "Order Now",
			bgColor: "#fa745c",
			isContentFirst: false,
		},
		{
			imgSrc: img2,
			heading: "Your treat awaits",
			description:
				"Fall in love with Starbucks® Rewards member perks, like a free drink with qualifying purchase during your first week. Valid for one-time use.*",
			buttonText: "Join Now",
			bgColor: "#006241",
			color: "#fff",
			border: "1px solid #fff",
			isContentFirst: true,
		},
		{
			imgSrc: img3,
			heading: "A bunch of delicious",
			description:
				"Ripe for the sippin’, enjoy the new Iced Apple Crisp Nondairy Cream Chai, beloved Apple Crisp Oatmilk Macchiato or Apple Crisp Oatmilk Shaken Espresso.",
			buttonText: "Order Now",
			bgColor: "#9e2240",
			border: "1px solid #fff",
			color: "#fff",
			isContentFirst: false,
		},
		{
			imgSrc: img4,
			heading: "Spicefully yours",
			description:
				"A delightful fall treat, the Pumpkin Cream Cheese Muffin is back and ready to pair with your favorite beverage.",
			buttonText: "Order Now",
			bgColor: "#d9e89a",
			isContentFirst: true,
		},
		{
			imgSrc: img5,
			heading: "Fall favorites in your personal cup",
			description:
				"Wherever you order—café, drive-thru or app—bring in your own clean cup to help reduce waste and earn Rewards.**",
			bgColor: "#f2f0eb",
			isContentFirst: false,
			buttonText: "Learn More",
		},
	];

	return (
		<div className="home-container">
			{rowsData.map((row, index) => (
				<div className="row" key={index}>
					<div className={`col ${row.isContentFirst ? "content-first" : ""}`}>
						{row.isContentFirst ? (
							<div
								style={{
									backgroundColor: row.bgColor,
									color: row.color || "inherit",
								}}
								className="content"
							>
								<h1 style={{ color: row.color || "inherit" }}>{row.heading}</h1>
								<p style={{ color: row.color || "inherit" }}>
									{row.description}
								</p>
								{row.buttonText && (
									<a
										href="#"
										className="order-now"
										style={{
											color: row.color || "inherit",
											border: row.border,
										}}
									>
										{row.buttonText}
									</a>
								)}
							</div>
						) : (
							<img src={row.imgSrc} alt={row.heading} className="image" />
						)}
					</div>
					<div
						className={`col ${!row.isContentFirst ? "content-first" : ""}`}
						style={{
							backgroundColor: row.bgColor,
							color: row.color,
						}}
					>
						{!row.isContentFirst ? (
							<div className="content">
								<h1 style={{ color: row.color || "inherit" }}>{row.heading}</h1>
								<p style={{ color: row.color || "inherit" }}>
									{row.description}
								</p>
								{row.buttonText && (
									<a
										href="#"
										className="order-now"
										style={{
											color: row.color || "inherit",
											border: row.border,
										}}
									>
										{row.buttonText}
									</a>
								)}
							</div>
						) : (
							<img src={row.imgSrc} alt={row.heading} className="image" />
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
