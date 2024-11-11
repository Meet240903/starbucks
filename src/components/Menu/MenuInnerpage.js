import React from "react";
import Innermenusidebardata from "../../Data/Innermenusidebardata";
import { Link } from "react-router-dom";

const MenuInnerpage = () => {
	return (
		<>
			<div className="menu-innerpage">
				{Innermenusidebardata.map((data, index) => (
					<div key={index} className="menu-section">
						<h2>{data.Maintitle}</h2>
						<ul>
							{data.Submenu.map((item, subIndex) => (
								<Link to={`/${item.slugs}`}>
									<li key={subIndex}>{item.title}</li>
								</Link>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default MenuInnerpage;
