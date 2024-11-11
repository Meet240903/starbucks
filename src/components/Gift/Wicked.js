import React, { useState, useEffect } from "react";
import "../../assets/styles/gift/wicked.css"; // Ensure this path is correct
import image1 from "../../assets/images/gift/wicked1.avif";
import image2 from "../../assets/images/gift/wicked2.webp";
import image3 from "../../assets/images/gift/wicked3.avif";
import image4 from "../../assets/images/gift/wicked4.webp";
import image5 from "../../assets/images/gift/wicked5.webp";

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
		<div className="wicked-card-carousel-container">
			<div className="wicked-carousel-container">
				<div className="wicked-featured-section">
					<h2>Wicked</h2>
				</div>
				<div className="wicked-carousel-section">
					<button
						className="wicked-carousel-button left"
						onClick={handlePrev}
						disabled={currentIndex === 0}
					>
						&lt;
					</button>
					<div className="wicked-carousel-wrapper">
						<div
							className="wicked-carousel-content"
							style={{
								transform: `translateX(-${
									currentIndex * (100 / imagesPerSlide)
								}%)`,
								gap: "2rem",
							}}
						>
							{images.map((image, index) => (
								<div className="wicked-carousel-item" key={index}>
									<img src={image} alt={`Gift card ${index}`} />
								</div>
							))}
						</div>
					</div>
					<button
						className="wicked-carousel-button right"
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
