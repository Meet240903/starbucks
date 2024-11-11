import React from "react";
import "../../assets/styles/rewards/extrasscomponent.css";
import img from "../../assets/images/reward/1-fun-freebies.webp";
import img2 from "../../assets/images/reward/2-order-and-pay-ahead.webp";
import img3 from "../../assets/images/reward/3-get-to-free-faster.webp";
const ExtrasComponent = () => {
	return (
		<div className="extras-component">
			<h2 className="extras-header">Endless Extras</h2>
			<p className="extras-description">
				Joining Starbucks® Rewards means unlocking access to benefits like quick
				and easy ordering, tasty Rewards and—yes, free coffee.
			</p>
			<div className="extras-row">
				<div className="extras-column">
					<img src={img} alt="Fun freebies" className="extras-image" />
					<h3>Fun freebies</h3>
					<p>
						Not only can you earn free coffee, look forward to a birthday treat
						plus coffee and tea refills.
					</p>
					<a href="#" className="extras-link">
						Learn more about fun freebies
					</a>
				</div>
				<div className="extras-column">
					<img src={img2} alt="Order & pay ahead" className="extras-image" />
					<h3>Order & pay ahead</h3>
					<p>
						Master the art of ordering ahead with saved favorites and payment
						methods.
					</p>
					<a href="#" className="extras-link">
						Learn more about ordering and paying ahead
					</a>
				</div>
				<div className="extras-column">
					<img src={img3} alt="Get to free faster" className="extras-image" />
					<h3>Get to free faster</h3>
					<p>
						Earn Stars even quicker with Bonus Star challenges, Double Star Days
						and exciting games.
					</p>
					<a href="#" className="extras-link">
						Learn more about getting free rewards faster
					</a>
				</div>
			</div>
		</div>
	);
};

export default ExtrasComponent;
