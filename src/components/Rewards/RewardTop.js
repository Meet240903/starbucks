import React from "react";
import "../../assets/styles/rewards/rewardtop.css";

const RewardTop = () => {
	return (
		<>
			{/* Sticky Rewards Bar */}
			<div className="reward-top">Starbucks® Rewards</div>

			{/* Image Section */}
			<div className="reward-image-section">
				<div className="reward-content">
					<h1>
						FREE COFFEE
						<br />
						IS A TAP AWAY
					</h1>
					<p>Join now to start earning Rewards.</p>
					<button className="join-now-btn">Join now</button>
					<p className="join-app-text">
						Or join in the app for the best experience
					</p>
				</div>
			</div>
		</>
	);
};

export default RewardTop;
