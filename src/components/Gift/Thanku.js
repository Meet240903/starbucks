import React, { useState, useEffect } from "react";
import "../../assets/styles/gift/thanku.css"; // Ensure this path is correct
import image1 from "../../assets/images/gift/BigThankYouFY22.avif";
import image2 from "../../assets/images/gift/HolidayThankYouFY25.jfif";
import image3 from "../../assets/images/gift/ThankfulForYouFY24.avif";
import image4 from "../../assets/images/gift/MyTreatFY24.avif";
import image5 from "../../assets/images/gift/SparkleThankYouFY24.avif";

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
		<div className="Thanku-card-carousel-container">
			<div className="Thanku-carousel-container">
				<div className="Thanku-featured-section">
					<h2>Thank You</h2>
				</div>
				<div className="Thanku-carousel-section">
					<button
						className="Thanku-carousel-button left"
						onClick={handlePrev}
						disabled={currentIndex === 0}
					>
						&lt;
					</button>
					<div className="Thanku-carousel-wrapper">
						<div
							className="Thanku-carousel-content"
							style={{
								transform: `translateX(-${
									currentIndex * (100 / imagesPerSlide)
								}%)`,
								gap: "2rem",
							}}
						>
							{images.map((image, index) => (
								<div className="Thanku-carousel-item" key={index}>
									<img src={image} alt={`Gift card ${index}`} />
								</div>
							))}
						</div>
					</div>
					<button
						className="Thanku-carousel-button right"
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
