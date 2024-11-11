import React, { useState, useEffect } from "react";
import "../../assets/styles/gift/holiday.css"; // Ensure this path is correct
import image1 from "../../assets/images/gift/ColdSnowmanFY25.jfif";
import image2 from "../../assets/images/gift/GingerbreadGiftsFY25.png";
import image3 from "../../assets/images/gift/HappyHolidaysFY25.png";
import image4 from "../../assets/images/gift/SipTheSeasonFY25.jpg";
import image5 from "../../assets/images/gift/WarmSnowmanFY25.jfif";

const App = () => {
	const images = [image1, image2, image3, image4, image5];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSmallDevice, setIsSmallDevice] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallDevice(window.innerWidth < 576);
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Adjust the number of images per slide based on device size
	const imagesPerSlide = isSmallDevice ? 1 : 4;
	const maxIndex = images.length - imagesPerSlide;

	const handleNext = () => {
		if (currentIndex < maxIndex) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className="holiday-card-carousel-container">
			<div className="holiday-carousel-container">
				<div className="holiday-featured-section">
					<h2>Holiday</h2>
				</div>
				<div className="holiday-carousel-section">
					<button
						className="holiday-carousel-button left"
						onClick={handlePrev}
						disabled={currentIndex === 0}
					>
						&lt;
					</button>
					<div className="holiday-carousel-wrapper">
						<div
							className="holiday-carousel-content"
							style={{
								transform: `translateX(-${
									currentIndex * (100 / imagesPerSlide)
								}%)`,
								gap: "2rem",
							}}
						>
							{images.map((image, index) => (
								<div className="holiday-carousel-item" key={index}>
									<img src={image} alt={`Gift card ${index}`} />
								</div>
							))}
						</div>
					</div>
					<button
						className="holiday-carousel-button right"
						onClick={handleNext}
						disabled={currentIndex >= maxIndex}
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
