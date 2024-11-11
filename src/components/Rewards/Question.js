import React from "react";
import "../../assets/styles/rewards/question.css";

const QuestionComponent = () => {
	return (
		<div className="question-container">
			<div className="question-header">
				<h1>Questions?</h1>
				<p>
					We want to help in any way we can. You can ask your barista anytime or
					we’ve answered the most commonly asked terms right over here.
				</p>
			</div>
			<div className="question-note">
				<p>At participating stores. Restrictions apply.</p>
			</div>
			<div className="question-details">
				<div className="question-text">
					<ol>
						<li>
							Excludes taxes and gratuities. At participating stores. Some
							restrictions apply. Flights purchased close to departure may not
							earn double Stars...
							<a
								href="https://deltastarbucks.com/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								deltastarbucks.com/terms
							</a>
							↩
						</li>
						<li>
							At participating stores only. Some restrictions apply. Linked Card
							members will earn 2% Cash Back...
							<a
								href="https://www.starbucks.com/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms and Conditions
							</a>
							. Bank of America, N.A. Member FDIC.↩
						</li>
						<li>
							Individuals must link loyalty program accounts to participate in
							offer. Members with linked accounts will earn...
							<a
								href="https://starbucks.com/MarriottBonvoy"
								target="_blank"
								rel="noopener noreferrer"
							>
								Starbucks.com/MarriottBonvoy
							</a>
							↩
						</li>
					</ol>
				</div>
				<div className="question-columns">
					<div className="column">
						<h2>Earning Stars</h2>
						<p>
							Stars cannot be earned on purchases of alcohol, Starbucks Cards or
							Starbucks Card reloads...
						</p>
						<p>
							Earn 1 Star per $1 spent when you scan your member barcode in the
							app, then pay with cash, credit/debit cards or mobile wallets at
							participating stores. You can also earn 1 Star per $1 spent when
							you link a payment method and pay directly through the app.
						</p>
						<p>
							Earn 2 Stars per $1 spent when you load funds and pay with your
							digital Starbucks Card in the app. You can also earn 2 Stars per
							$1 spent when you pay in-person at a participating store with your
							registered physical Starbucks Card or scan your member barcode in
							the app, and then use any physical Starbucks Card (regardless of
							whether it is registered) to complete the purchase.
						</p>
						<h2>Benefits</h2>
						<p>
							Free refills available during the same in-store visit only. To
							qualify for the Birthday Reward...
						</p>
					</div>
					<div className="column">
						<h2>Terms of Use</h2>
						<p>
							For full program details visit{" "}
							<a
								href="https://www.starbucks.com/rewards/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								starbucks.com/rewards/terms
							</a>
						</p>
						<p>
							Starbucks® Rewards benefits are available at participating
							Starbucks stores. Not all stores have the ability to honor Rewards
							at this time. Visit the Starbucks Store Locator and search for
							locations honoring “Redeem Rewards”.
						</p>
						<h2>Redeeming Rewards</h2>
						<p>
							Rewards cannot be redeemed for alcoholic beverages or multi-serve
							items. You pay the difference for any beverage customization over
							$1 and/or merchandise item over $20. Not all stores honor tiered
							Rewards. Select stores redeem 200 Stars for free food or drink
							items only.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionComponent;
