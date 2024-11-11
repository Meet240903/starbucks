import React from "react";
import RewardTop from "./Rewards/RewardTop";
import MultiThumbLineRows from "./Rewards/MultiThumblineRow";
import TabComponent from "./Rewards/TabComponent";
import Extrass from "./Rewards/ExtrassComponent";
import Cash from "./Rewards/Cash";
import ProgramContainer from "./Rewards/ProgramContainer";
import QuestionComponent from "./Rewards/Question";
const Reward = () => {
	return (
		<>
			<RewardTop />
			<MultiThumbLineRows />
			<TabComponent />
			<Extrass />
			<Cash />
			<ProgramContainer /> <QuestionComponent />
		</>
	);
};

export default Reward;
