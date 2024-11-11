// Rename the import for the main component
import React from "react";
import HomeMain from "./Home/HomeMain"; // Renamed import to HomeMain
import HomeContent from "./Home/HomeContent";

const Home = () => {
	return (
		<>
			<HomeMain />
			<HomeContent />
		</>
	);
};

export default Home;
