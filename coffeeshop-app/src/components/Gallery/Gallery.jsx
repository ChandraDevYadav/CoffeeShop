import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // FontAwesome icon for the plus sign

const Gallery = () => {
  const images = [
    { id: 1, src: "co1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "co2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "co3.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "co4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "co4.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "co5.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "co6.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "co7.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "crousel2.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "crousel1.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "crousel3.jpg", alt: "Gallery Image 11" },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-3">
        <img src="./cb.png" alt="" className="w-6 h-6" />
        <p className="text-[22px] text-[#3f271e] font-semibold font-caudex">
          OUR GALLERY
        </p>
      </div>
      <div className="text-center mb-16">
        <p className="text-[60px] font-caudex text-[#3f271e] font-bold my-4">
          Our Best Gallery Of The Coffee
        </p>
        <p className="text-gray-500 px-4 font-caudex font-medium">
          With the subscription, enjoy your favourite coffees without having to think about it
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-4 gap-5 mx-28">
        {images.map((image, index) => (
          <div key={image.id} className="relative w-full h-64 overflow-hidden group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            {/* Plus icon overlay */}
            <div
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <FaPlus className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-8 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Image Carousel */}
            <div className="flex justify-between items-center">
              <button className="text-white text-4xl" onClick={showPrevious}>
                &lsaquo;
              </button>
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button className="text-white text-4xl" onClick={showNext}>
                &rsaquo;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
