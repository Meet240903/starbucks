import React from "react";
import GiftFeature from "./Gift/GiftFeature";
import Holiday from "./Gift/HoliDay";
import RedCup from "./Gift/Redcup";
import Thanku from "./Gift/Thanku";
import Celebration from "./Gift/Celebration";
import Wicked from "./Gift/Wicked";
import Appreciation from "./Gift/Appreciation";
const GiftCard = () => {
	return (
		<>
			<GiftFeature />
			<Holiday />
			<RedCup />
			<Thanku />
			<Celebration />
			<Wicked />
			<Appreciation />
		</>
	);
};

export default GiftCard;
