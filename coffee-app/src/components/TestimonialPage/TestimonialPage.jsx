import React, { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const testimonials = [
  {
    id: 1,
    image: "./team_member_1.png",
    name: 'John Doe',
    position: 'Client',
    description: '“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.',
    rating: 5,
  },
  {
    id: 2,
    image: "./team_member_2.png",
    name: 'Jane Smith',
    position: 'Client',
    description: '“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.',
    rating: 4,
  },
  {
    id: 3,
    image: "./team_member_3.png",
    name: 'Bob Johnson',
    position: 'Client',
    description: '“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.',
    rating: 4,
  },
  {
    id: 4,
    image: "./team_member_4.png",
    name: 'Alice Williams',
    position: 'Client',
    description: '“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.',
    rating: 5,
  },
];

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div
      className="w-full h-auto relative"
      onMouseEnter={() => setIsHovered(true)}  // Show buttons on hover
      onMouseLeave={() => setIsHovered(false)} // Hide buttons when not hovering
    >
      <div className='mt-[1rem] pt-10 md:pt-0 md:mt-[4rem] border-t border-gray-300 md:border-t-0'>
        <div className="flex justify-center items-center gap-3">
          <img src="./cb.png" alt="" className="w-6 h-6" />
          <p className="text-[18px] md:text-[22px] text-[#3f271e] font-semibold font-caudex">OUR ONLINE SHOP</p>
        </div>
        <div className="text-center">
          <p className="text-[40px] md:text-[60px] font-caudex text-[#3f271e] font-bold">What Our Clients Says</p>
          <p className="text-gray-500 px-4 font-caudex font-medium">
            Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
            dolor eget neque viverra, sed interdum metus <br /> interdum. Cras lobortis
            pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative w-full flex items-center justify-center py-10">
        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full mx-4 md:mx-28">
          {/* First Testimonial */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border">
            <div className='flex gap-3'>
              <img src={testimonials[currentIndex].image} alt="" className='w-20 h-20' />
              <div>
                <h2 className="text-[1.5rem] md:text-[1.8rem] font-semibold text-[#3f271e] font-caudex">{testimonials[currentIndex].name}</h2>
                <p className='font-medium text-[#3f271e]'>{testimonials[currentIndex].position}</p>
              </div>
            </div>
            <div className="flex gap-4 my-6">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={index < testimonials[currentIndex].rating ? './star.png' : './star1.png'}
                  alt="rating star"
                  className="w-6 h-6"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonials[currentIndex].description}</p>
            <div className='relative'>
              <img src="./qt-icon.png" alt="" className='w-10 h-10 absolute bottom-48 left-[32rem]' />
            </div>
          </div>

          {/* Second Testimonial */}
          {testimonials[currentIndex + 1] && (
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border">
              <div className='flex gap-3'>
                <img src={testimonials[currentIndex + 1].image} alt="" className='w-20 h-20' />
                <div>
                  <h2 className="text-[1.5rem] md:text-[1.8rem] text-[#3f271e] font-semibold font-caudex">{testimonials[currentIndex + 1].name}</h2>
                  <p className='font-medium text-[#3f271e]'>{testimonials[currentIndex + 1].position}</p>
                </div>
              </div>
              <div className="flex gap-4 my-6">
                {Array.from({ length: 5 }, (_, index) => (
                  <img
                    key={index}
                    src={index < testimonials[currentIndex + 1].rating ? './star.png' : './star1.png'}
                    alt="rating star"
                    className="w-6 h-6"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonials[currentIndex + 1].description}</p>
              <div className='relative'>
                <img src="./qt-icon.png" alt="" className='w-10 h-10 absolute bottom-48 left-[32rem]' />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Arrow Buttons */}
      {isHovered && (
        <div className={`absolute top-[50%] left-0 right-0 flex justify-center transform -translate-y-1/2 transition-opacity duration-300`}>
          <button
            className="bg-white text-black p-2 ml-4 rounded-full hover:bg-[#6f3727] shadow"
            onClick={prevSlide}
          >
            <img src="./square.png" className='w-3 h-3' alt="" />
          </button>
          <button
            className="bg-white text-black mr-4 p-2 rounded-full hover:bg-[#6f3727] shadow"
            onClick={nextSlide}
          >
            <img src="./square.png" className='w-3 h-3' alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialPage;
