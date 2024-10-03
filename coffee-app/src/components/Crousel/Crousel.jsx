import React, { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

// Sample images for the carousel
const images = [
  "./crousel1.jpg",
  "./crousel2.jpg",
  "./crousel3.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}  // Show buttons on hover
      onMouseLeave={() => setIsHovered(false)} // Hide buttons when not hovering
    >
      <div className="overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] transition-transform duration-500 object-cover"
        />
      </div>
      {/* Arrow Buttons */}
      <div className={`absolute top-[60%] left-0 right-0 flex justify-between transform -translate-y-1/2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          className="bg-white text-black p-2 sm:p-3 md:p-4 ml-2 md:ml-4 rounded-full hover:bg-[#6f3727] transition-colors duration-200"
          onClick={prevSlide}
        >
          <TfiAngleLeft className='w-5 h-5 md:w-6 md:h-6' />
        </button>
        <button
          className="bg-white text-black p-2 sm:p-3 md:p-4 mr-2 md:mr-4 rounded-full hover:bg-[#6f3727] transition-colors duration-200"
          onClick={nextSlide}
        >
          <TfiAngleRight className='w-5 h-5 md:w-6 md:h-6' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
