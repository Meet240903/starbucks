import React, { useState } from "react";
import Innermenusidebardata from "../../Data/Innermenusidebardata";
import '../../assets/styles/menu/menuInnerPage.css';

const MenuInnerpage = () => {
	const [selectedItem, setSelectedItem] = useState({
		Maintitle: Innermenusidebardata[0].Maintitle,
		selectedSubmenu: Innermenusidebardata[0].Submenu[0],
	});

	return (
		<>
			<div className="menu-inner-page-item-section-container">
				{/* Left Sidebar */}
				<div className="menu-inner-page-item-list-section">
					{Innermenusidebardata.map((data, index) => (
						<div key={index} className="menu-inner-page-item-list-inner-section">
							<h2>{data.Maintitle}</h2>
							{data.Submenu.map((item, subIndex) => (
								<li
									key={subIndex}
									onClick={() => setSelectedItem({ ...data, selectedSubmenu: item })}
									className={
										selectedItem.Maintitle === data.Maintitle &&
										selectedItem.selectedSubmenu.title === item.title
											? "active"
											: ""
									}
								>
									{item.title}
								</li>
							))}
						</div>
					))}
				</div>

				{/* Right Content Section */}
				<div className="menu-inner-page-item-list-right-content-section">
					<p className="menu-inner-page-item-list-right-content-breadcrumb">
						Menu / <span>{selectedItem.selectedSubmenu.title}</span>
					</p>
					<h2>{selectedItem.selectedSubmenu.title}</h2>

					{selectedItem.selectedSubmenu.itemData ? (
						selectedItem.selectedSubmenu.itemData.map((section, sectionIndex) => (
							<div key={sectionIndex} className="menu-inner-page-item-list-right-inner-content">
								<h3>{section.title}</h3>
								<hr />
								<div className="menu-inner-page-item-list-right-inner-content-body">
									{section.itemList.map((item, itemIndex) => (
										<div key={itemIndex} className="menu-inner-page-item-list-right-inner-content-body-content">
											<img src={item.sectionImg} alt={item.itemName} />
											<h5>{item.itemName}</h5>
										</div>
									))}
								</div>
							</div>
						))
					) : (
						<p>No items available.</p>
					)}
				</div>
			</div>
		</>
	);
};

export default MenuInnerpage;
