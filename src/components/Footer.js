import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faInstagram,
	faWhatsapp,
	faTwitter,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-col">
					<h1>About Us</h1>
					<a href="#">Our Company</a>
					<a href="#">Our Coffee</a>
					<a href="#">Stories and News</a>
					<a href="#">Starbucks Archive</a>
					<a href="#">Investor Relations</a>
					<a href="#">Customer Service</a>
					<a href="#">Contact Us</a>
				</div>
				<div className="footer-col">
					<h1>Careers</h1>
					<a href="#">Culture and Values</a>
					<a href="#">Inclusion, Diversity, and Equity</a>
					<a href="#">College Achievement Plan</a>
					<a href="#">Alumni Community</a>
					<a href="#">U.S. Careers</a>
					<a href="#">International Careers</a>
				</div>
				<div className="footer-col">
					<h1>Social Impact</h1>
					<a href="#">People</a>
					<a href="#">Planet</a>
					<a href="#">Environmental and Social Impact Reporting</a>
				</div>
				<div className="footer-col">
					<h1>For Business Partners</h1>
					<a href="#">Landlord Support Center</a>
					<a href="#">Suppliers</a>
					<a href="#">Corporate Gift Card Sales</a>
					<a href="#">Office and Foodservice Coffee</a>
				</div>
				<div className="footer-col">
					<h1>Order and Pick Up</h1>
					<a href="#">Order on the App</a>
					<a href="#">Order on the Web</a>
					<a href="#">Delivery</a>
					<a href="#">Order and Pick Up Options</a>
					<a href="#">Explore and Find Coffee for Home</a>
				</div>
			</div>
			<hr />
			<div className="footer-bottom">
				<div className="footer-social">
					<FontAwesomeIcon icon={faYoutube} />
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faWhatsapp} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faFacebook} />
				</div>
				<div className="footer-links">
					<a href="#">Privacy Notice</a>
					<a href="#">Consumer Health Privacy Notice</a>
					<a href="#">Terms of Use</a>
					<a href="#">Do Not Share My Personal Information</a>
					<a href="#">CA Supply Chain Act</a>
					<a href="#">Accessibility</a>
					<a href="#">Cookie Preferences</a>
				</div>
				<p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
