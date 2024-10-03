import React, { useState } from "react";

const Crousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const images = [
    {
      src: "./inner_b2.jpg",
      date: "24th March 2024",
      title: "Lorem ipsum dolor sit amet, consectetur cing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      src: "./inner_b1.jpg",
      date: "25th March 2024",
      title: "Sed ut perspiciatis unde omnis iste natus error.",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
    {
      src: "./inner_b3.jpg",
      date: "26th March 2024",
      title: "But I must explain to you how all this mistaken idea.",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];

  // Function to move to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid grid-cols-1">
      <div className="border-2 border-gray-100 shadow-lg mt-12 relative">
        {/* Carousel Image */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-[35rem] object-cover"
        />
        <div className="relative">
          <button className="bg-[#3f271e] text-white font-medium text-md px-8 py-2 absolute -bottom-5 ml-5">
            {images[currentIndex].date}
          </button>
        </div>
        <p className="text-3xl font-semibold font-caudex pl-6 pr-12 mt-10 mb-6">
          {images[currentIndex].title}
        </p>
        <p className="pr-12 font-caudex font-medium pl-6">
          {images[currentIndex].description}
        </p>
        <button className="text-lg underline font-caudex font-semibold pl-6 my-8">
          READ MORE
        </button>

        {/* Carousel Controls */}
        <button
          className="absolute left-2 top-[18rem] transform -translate-y-1/2 bg-white px-2 py-2 rounded-full shadow-md"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute right-2 top-[18rem] transform -translate-y-1/2 bg-white px-2 py-2 rounded-full shadow-md"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Crousel;
