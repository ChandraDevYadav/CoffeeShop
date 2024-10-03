import React, { useState } from 'react';

const ImageGallery = () => {
  // List of images
  const images = [
    './img1.jpg',
    './img2.jpg',
    './img3.jpg',
    './img4.jpg', // Add your image paths here
  ];

  // Set the first image as the default main image
  const [mainImage, setMainImage] = useState(images[0]);

  // Function to handle image click
  const handleImageClick = (image) => {
    setMainImage(image); // Update the main image when a thumbnail is clicked
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {/* Main Image on the left */}
      <div className="w-2/3">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-[500px] object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Small images on the right */}
      <div className="flex flex-col space-y-4 w-1/3">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`h-[150px] object-cover rounded-md cursor-pointer transition-transform duration-200 transform hover:scale-105 ${
              mainImage === image ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
