import React, { useState } from "react";
import "../../assets/styles/rewards/tabcomponent.css";
import drinkImage from "../../assets/images/reward/drink.webp";
import hundredImage from "../../assets/images/reward/100.webp";
import twoHundredImage from "../../assets/images/reward/200.webp";
import threeHundredImage from "../../assets/images/reward/300.webp";
import fourHundredImage from "../../assets/images/reward/400.webp";

const TabComponent = () => {
	const [activeTab, setActiveTab] = useState("25");

	const tabContent = {
		25: {
			image: drinkImage,
			text: "Customize your drink Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
		},
		100: {
			image: hundredImage,
			text: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
		},
		200: {
			image: twoHundredImage,
			text: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
		},
		300: {
			image: threeHundredImage,
			text: "Sandwich, protein box or at-home coffee Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
		},
		400: {
			image: fourHundredImage,
			text: "Select Starbucks® merchandise Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
		},
	};

	return (
		<div className="tab-component">
			<h2 className="tab-header">Get your favorites for free</h2>
			<div className="tab-buttons">
				{["25", "100", "200", "300", "400"].map((stars) => (
					<button
						key={stars}
						className={`tab-button ${activeTab === stars ? "active" : ""}`}
						onClick={() => setActiveTab(stars)}
					>
						{stars}★
					</button>
				))}
			</div>
			<div className="tab-content" style={{ backgroundColor: "#d4e9e2" }}>
				<div className="content-container">
					<img
						src={tabContent[activeTab].image}
						alt={`${activeTab} stars reward`}
						className="tab-image"
					/>
					<p className="tab-text">{tabContent[activeTab].text}</p>
				</div>
			</div>
		</div>
	);
};

export default TabComponent;
