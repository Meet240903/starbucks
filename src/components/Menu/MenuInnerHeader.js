import React, { useState } from "react";
import "../../assets/styles/menu/menuinnerheader.css"; // Ensure the path is correct
import MenuInnerpage from "./MenuInnerpage";
const HeaderTabs = () => {
	const [activeTab, setActiveTab] = useState("home");

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className="header-tabs">
			<div className="tab-menu">
				<button
					className={`tab ${activeTab === "home" ? "active" : ""}`}
					onClick={() => handleTabClick("home")}
				>
					Menu
				</button>
				<button
					className={`tab ${activeTab === "about" ? "active" : ""}`}
					onClick={() => handleTabClick("about")}
				>
					Featured
				</button>
				<button
					className={`tab ${activeTab === "services" ? "active" : ""}`}
					onClick={() => handleTabClick("services")}
				>
					Previous
				</button>
				<button
					className={`tab ${activeTab === "contact" ? "active" : ""}`}
					onClick={() => handleTabClick("contact")}
				>
					Favorites
				</button>
			</div>

			<div className="tab-content">
				{activeTab === "home" && <MenuInnerpage />}
				{/* {activeTab === "about" && <FeaturedContent />}
				{activeTab === "services" && <PreviousContent />}
				{activeTab === "contact" && <FavoritesContent />} */}
			</div>
		</div>
	);
};

export default HeaderTabs;
