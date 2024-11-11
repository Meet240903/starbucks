import React from "react";
import "../../assets/styles/gift/redcup.css"; // Ensure this path is correct
import image1 from "../../assets/images/gift/redcup1.png";
import image2 from "../../assets/images/gift/redcup2.jfif";
import image3 from "../../assets/images/gift/redcup3.jpg";
import image4 from "../../assets/images/gift/redcup4.jpg";
import image5 from "../../assets/images/gift/HonoringYouFY24.avif";
import image6 from "../../assets/images/gift/ColdSnowmanFY25.jfif";
import image7 from "../../assets/images/gift/AlwaysGratefulFY23.webp";
import image8 from "../../assets/images/gift/HolidayBirthdayFY25.jfif";
import image9 from "../../assets/images/gift/BirthYayBalloonsFY24.webp";
import image10 from "../../assets/images/gift/BirthdayCakeFY24.jpg";
import image11 from "../../assets/images/gift/PartyBirthdayFY23.webp";
const RedCup = () => {
	return (
		<div className="red-cup-container">
			{/* Red Cup Section */}
			<div className="red-cup-section">
				<h2>Red Cup</h2>
				<div className="image-row">
					{[image1, image2, image3, image4].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Red Cup image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>

			{/* Veterans Day Section */}
			<div className="veterans-day-section">
				<h2>Veterans Day | 11/11</h2>
				<div className="image-row">
					{[image5, image6, image7].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Veterans Day image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>

			{/* Birthday Section */}
			<div className="birthday-section">
				<h2>Birthday</h2>
				<div className="image-row">
					{[image8, image9, image10, image11].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Birthday image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RedCup;
