import React, { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight  } from "react-icons/tfi";

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
      className="w-full h-auto"
      onMouseEnter={() => setIsHovered(true)}  // Show buttons on hover
      onMouseLeave={() => setIsHovered(false)} // Hide buttons when not hovering
    >
      <div className="overflow-hidden relative -top-20 -z-10">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[800px] transition-transform duration-500"
        />
      </div>
      {/* Arrow Buttons */}
      <div className={`absolute top-[65%] left-0 right-0 flex justify-between transform -translate-y-1/2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          className="bg-white text-black p-4 ml-16 rounded-full hover:bg-[#6f3727]"
          onClick={prevSlide}
        >
         <TfiAngleLeft  className='w-6 h-6' />
        </button>
        <button
          className="bg-white text-black mr-16 p-4 rounded-full hover:bg-[#6f3727]"
          onClick={nextSlide}
        >
          <TfiAngleRight  className='w-6 h-6'/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
