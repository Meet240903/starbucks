import React from "react";
import "../../assets/styles/rewards/multithumblinerow.css"; // Import the corresponding CSS file
import firstImage from "../../assets/images/reward/getting-started-1@2x.webp"; // Replace with actual image path
import secondImage from "../../assets/images/reward/getting-started-2@2x.webp";
import thirdImage from "../../assets/images/reward/getting-started-3@2x.webp";

const MultiThumbLineRows = () => {
	const columnData = [
		{
			image: firstImage,
			title: "Create an account",
			description:
				"To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.",
		},
		{
			image: secondImage,
			title: "Order and pay how you’d like",
			description:
				"Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all the ways.",
		},
		{
			image: thirdImage,
			title: "Earn Stars, get Rewards",
			description:
				"As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start earning today!",
		},
	];

	return (
		<div className="multi-thumb-container">
			<h2 className="main-title">Getting started is easy</h2>
			<p className="subtitle">
				Earn Stars and get rewarded in a few easy steps.
			</p>

			<div className="row">
				{columnData.map((column, index) => (
					<div key={index} className="column">
						<img
							src={column.image}
							alt={column.title}
							className="column-image"
						/>
						<h3 className="column-title">{column.title}</h3>
						<p className="column-description">{column.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MultiThumbLineRows;
