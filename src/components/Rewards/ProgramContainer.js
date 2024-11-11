import React from "react";
import "../../assets/styles/rewards/programcontainer.css";
import img1 from "../../assets/images/reward/delta-skymiles.webp";
import img2 from "../../assets/images/reward/bank-of-america.webp";
import img3 from "../../assets/images/reward//marriott-logo.webp";

const ProgramContainer = () => {
	return (
		<div className="program-container">
			<div className="program-content">
				<h1 className="program-heading">Keep the Rewards Coming</h1>
				<p className="program-subheading">
					The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
					and unlock perks from our partners, all while earning more Stars.
				</p>

				<div className="program-row">
					<div className="program-column">
						<img src={img1} alt="Partner 1" className="program-img" />
						<p className="program-text">
							Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn
							miles on Starbucks Card reloads of $25 or more, plus Double Stars
							on travel days.
						</p>
					</div>
					<div className="program-column">
						<img src={img2} alt="Partner 2" className="program-img" />
						<p className="program-text">
							Earn exclusive benefits and enjoy special offers from our trusted
							partners when you join Starbucks® Rewards.
						</p>
					</div>
					<div className="program-column">
						<img src={img3} alt="Partner 3" className="program-img" />
						<p className="program-text">
							Enjoy more ways to earn and redeem Stars with partnerships that
							bring you more rewards and perks.
						</p>
					</div>
				</div>

				<button className="join-button">Join Starbucks® Rewards</button>
			</div>
		</div>
	);
};

export default ProgramContainer;
