import React, { useState } from "react";
import "../../assets/styles/gift/giftfeature.css"; // Add this line for CSS
import image1 from "../../assets/images/gift/feature1.avif";
import image2 from "../../assets/images/gift/feature2.jfif";
import image3 from "../../assets/images/gift/feature3.avif";
import image4 from "../../assets/images/gift/feature4.webp";
import image5 from "../../assets/images/gift/feature5.webp";
import image6 from "../../assets/images/gift/feature6.avif";
import image7 from "../../assets/images/gift/faeture7.avif";
import image8 from "../../assets/images/gift/feature8.webp";
import image9 from "../../assets/images/gift/feature9.jpg";
import image10 from "../../assets/images/gift/feature10.avif";
import image11 from "../../assets/images/gift/feature11.jfif";
import image12 from "../../assets/images/gift/feature12.webp";
import image13 from "../../assets/images/gift/feature13.png";
import image14 from "../../assets/images/gift/feature14.webp";
import image15 from "../../assets/images/gift/feature15.png";
import image16 from "../../assets/images/gift/faeture7.avif";

const App = () => {
	const images = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
		image14,
		image15,
		image16,
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [showAll, setShowAll] = useState(false);

	const imagesPerSlide = window.innerWidth <= 768 ? 1 : 4;

	const handleNext = () => {
		if (currentIndex < images.length - imagesPerSlide) {
			setCurrentIndex(currentIndex + imagesPerSlide);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - imagesPerSlide);
		}
	};

	const handleSeeAll = () => {
		setShowAll(!showAll);
	};

	return (
		<div className="gift-card-carousel-container">
			<h1>Gift Cards</h1>
			<div className="carousel-container">
				<div className="featured-section">
					<h2>Featured</h2>
				</div>
				<div className="carousel-section">
					<button className="see-all-button" onClick={handleSeeAll}>
						{showAll ? "Hide All" : "See All"}
					</button>
					{!showAll ? (
						<>
							<button className="carousel-button left" onClick={handlePrev}>
								&lt;
							</button>
							<div className="carousel-wrapper">
								<div
									className="carousel-content"
									style={{
										transform: `translateX(-${
											currentIndex * (100 / imagesPerSlide)
										}%)`,
										gap: "2rem",
									}}
								>
									{images.map((image, index) => (
										<div className="carousel-item" key={index}>
											<img src={image} alt={`Gift card ${index}`} />
										</div>
									))}
								</div>
							</div>
							<button className="carousel-button right" onClick={handleNext}>
								&gt;
							</button>
						</>
					) : (
						<div className="all-images">
							{images.map((image, index) => (
								<div className="all-images-item" key={index}>
									<img src={image} alt={`Gift card ${index}`} />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
