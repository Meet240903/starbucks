import React from "react";
import "../../assets/styles/gift/appreciation.css"; // Ensure this path is correct
import image1 from "../../assets/images/gift/Thanksgiving1.webp";
import image2 from "../../assets/images/gift/Thanksgiving2.webp";
import image3 from "../../assets/images/gift/Thanksgiving3.avif";
import image5 from "../../assets/images/gift/Appreciation1.jpg";
import image6 from "../../assets/images/gift/Appreciation2.jpg";
import image7 from "../../assets/images/gift/Appreciation3.jpg";
import image8 from "../../assets/images/gift/Appreciation4.avif";
import image9 from "../../assets/images/gift/encouragement1.png";
import image10 from "../../assets/images/gift/encouragement2.avif";
import image11 from "../../assets/images/gift/encouragement3.jfif";
import image12 from "../../assets/images/gift/encouragement4.avif";
import image13 from "../../assets/images/gift/affection1.avif";
import image14 from "../../assets/images/gift/affection2.webp";
import image15 from "../../assets/images/gift/affection3.webp";
import image16 from "../../assets/images/gift/workplace1.jpg";
import image17 from "../../assets/images/gift/workplace2.webp";
import image18 from "../../assets/images/gift/workplace3.avif";
import image19 from "../../assets/images/gift/workplace4.avif";
import image20 from "../../assets/images/gift/anytime1.png";
import image21 from "../../assets/images/gift/anytime2.jfif";
import image22 from "../../assets/images/gift/anytime3.avif";
import image23 from "../../assets/images/gift/anytime4.avif";

const RedCup = () => {
	return (
		<div className="red-cup-container">
			{/* Red Cup Section */}
			<div className="red-cup-section">
				<h2>Thanksgiving | 11/28</h2>
				<div className="image-row">
					{[image1, image2, image3].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Red Cup image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
			{/* Veterans Day Section */}
			<div className="veterans-day-section">
				<h2>Appreciation</h2>
				<div className="image-row">
					{[image5, image6, image7, image8].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Veterans Day image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
			{/* Birthday Section */}
			<div className="birthday-section">
				<h2>Encouragement</h2>
				<div className="image-row">
					{[image9, image10, image11, image12].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Birthday image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>{" "}
			<div className="red-cup-section">
				<h2>Affection</h2>
				<div className="image-row">
					{[image13, image14, image15].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Red Cup image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
			<div className="red-cup-section">
				<h2>Workplace</h2>
				<div className="image-row">
					{[image16, image17, image18, image19].map((img, index) => (
						<div className="image-item" key={index}>
							<img src={img} alt={`Red Cup image ${index + 1}`} />
						</div>
					))}
				</div>
			</div>{" "}
			<div className="red-cup-section">
				<h2>Anytime</h2>
				<div className="image-row">
					{[image20, image21, image22, image23].map((img, index) => (
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
