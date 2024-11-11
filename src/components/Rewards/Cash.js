import React from "react";
import "../../assets/styles/rewards/cash.css";
import img from "../../assets/images/reward/1A.png";
import img2 from "../../assets/images/reward/1B.webp";
import img3 from "../../assets/images/reward/2A.png";
import img4 from "../../assets/images/reward/2B.webp";

const CashComponent = () => {
	return (
		<div className="cash-container">
			<div className="cash-header">
				<h1 className="cash-heading">Cash or card, you earn Stars</h1>
				<p className="cash-subheading">
					No matter how you pay, you can earn Stars with your morning coffee.
					Those Stars add up to (really delicious) Rewards.
				</p>
			</div>
			<div className="cash-rows">
				{/* First Row */}
				<div className="cash-row">
					<div className="cash-column">
						<h2>1★ per dollar</h2>
					</div>
					<div className="cash-column">
						<img src={img} alt="Scan and pay" className="cash-img" />
						<div>
							<h2>Scan and pay separately</h2>
							<p>Use cash or credit/debit card at the register.</p>
						</div>
					</div>
					<div className="cash-column">
						<img src={img2} alt="Save payment" className="cash-img" />
						<div>
							<h2>Save payment in the app</h2>
							<p>
								Check-out faster by saving a credit/debit card or PayPal to your
								account. You’ll be able to order ahead or scan and pay at the
								register in one step.
							</p>
						</div>
					</div>
				</div>

				{/* Second Row */}
				<div className="cash-row">
					<div className="cash-column">
						<h2>2★ per dollar</h2>
					</div>
					<div className="cash-column">
						<img src={img3} alt="Pay with cash" className="cash-img" />
						<div>
							<h2>Pay with cash</h2>
							<p>Details about paying with cash at the register.</p>
						</div>
					</div>
					<div className="cash-column">
						<img src={img4} alt="Pay with app" className="cash-img" />
						<div>
							<h2>Pay through the app</h2>
							<p>
								Save time by managing your payment options directly through the
								app.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CashComponent;
