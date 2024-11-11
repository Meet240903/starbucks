import React from "react";
import "../../assets/styles/home/homecontent.css";

const HomeContent = () => {
	return (
		<div className="home-content-container">
			<p className="info-text">
				*Applies to non-dairy milk customizations on standard beverages at cafés
				owned and operated by Starbucks in the U.S. and Canada.
			</p>
			<p className="info-text">
				**Valid only for new Starbucks Rewards members for 7 days from sign up.
				Offer good at participating stores for a handcrafted menu-sized beverage
				with qualifying purchase ($8 max value). Qualifying purchase excludes
				alcohol, Starbucks Card and Starbucks Card reloads. Limit one per
				member. Cannot be combined with other offers or discounts. Excludes
				delivery services. Sign up before 1/2/2025 to be eligible.
			</p>
			<p className="info-text">
				***Available in participating U.S. stores, while supplies last.
			</p>
		</div>
	);
};

export default HomeContent;
