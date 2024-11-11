import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../assets/styles/header.css"; // External CSS for styling
import img from "../assets/images/header-logo.jfif"; // External image file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faBars,
	faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import faBars and faTimes for the menu toggle

const Header = () => {
	const [activeLink, setActiveLink] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

	const handleNavClick = (link) => {
		setActiveLink(link);
		setIsMenuOpen(false); // Close menu when a link is clicked
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div className="header-left">
				<img src={img} className="logo" alt="Logo" />
				<button className="menu-toggle" onClick={toggleMenu}>
					<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
				</button>
			</div>

			<nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
				{[
					{ name: "Menu", path: "/menu-inner" },
					{ name: "Rewards", path: "/reward" },
					{ name: "Gift Cards", path: "/gift" },
				].map((item) => (
					<Link
						key={item.name}
						to={item.path}
						className={`nav-link ${activeLink === item.name ? "active" : ""} ${
							item.name === "Rewards" ? "nav-rewards" : ""
						}`}
						onClick={() => handleNavClick(item.name)}
					>
						{item.name}
					</Link>
				))}
				<Link to="/find-store" className="nav-icon">
					<FontAwesomeIcon icon={faMapMarkerAlt} /> Find Store
				</Link>
				<Link to="/sign-in" className="nav-icon_signin">
					Sign In
				</Link>
				<Link to="/join" className="nav-icon join-now">
					Join Now
				</Link>
			</nav>
		</header>
	);
};

export default Header;
