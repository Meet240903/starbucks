import React from "react";
import "../../assets/styles/gift/celebration.css"; // Ensure this path is correct
import image1 from "../../assets/images/gift/celebration1.png";
import image2 from "../../assets/images/gift/celebration2.webp";
import image3 from "../../assets/images/gift/celebration3.avif";
import image4 from "../../assets/images/gift/celebration4.avif";

const RedCup = () => {
	return (
		<div className="celebration-cup-container">
			{/* celebration Cup Section */}
			<div className="celebration-cup-section">
				<h2>Red Cup</h2>
				<div className="image-row">
					{[image1, image2, image3, image4].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Red Cup image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RedCup;
