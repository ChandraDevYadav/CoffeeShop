import React from "react";

const ProductDetail = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mr-12 lg:ml-4 mt-8">
      {/* Product Name and Price */}
      <div className="border-b-2 border-gray-300 pb-6">
        <p className="text-sm sm:text-base">Workstead</p>
        <h1 className="text-2xl sm:text-3xl font-caudex font-bold my-2 sm:my-4">
          Helios Piranho Lamp
        </h1>
        <div className="flex gap-3 sm:gap-5 mt-4 sm:mt-8">
          <p className="text-lg sm:text-xl font-caudex font-medium">$700.00</p>
          <p className="text-lg sm:text-xl font-caudex font-medium text-gray-400 line-through">
            $820.00
          </p>
        </div>
      </div>

      {/* Product Description */}
      <div>
        <p className="font-medium text-gray-400 mt-5 text-sm sm:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>

        {/* Category */}
        <h1 className="text-base sm:text-lg font-caudex font-medium my-5 sm:my-7">
          Category: furniture, decor
        </h1>

        {/* Quantity and Add to Cart Button */}
        <div className="flex gap-3 sm:gap-5 items-center">
          <p className="px-6 md:px-10 py-3 border-gray-300 border-2 text-sm sm:text-base rounded-lg">
            1
          </p>
          <button className="bg-[#3f271e] text-white font-medium font-caudex text-sm sm:text-md px-6 sm:px-8 py-4 rounded-lg">
            ADD TO CART
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 sm:gap-5 my-8 sm:my-12">
          <img src="./facebook.png" className="w-6 sm:w-8 h-6 sm:h-8" alt="Facebook" />
          <img src="./instagram.png" className="w-6 sm:w-8 h-6 sm:h-8" alt="Instagram" />
          <img src="./twitter.png" className="w-6 sm:w-8 h-6 sm:h-8" alt="Twitter" />
          <img src="./linkedin.png" className="w-6 sm:w-8 h-6 sm:h-8" alt="LinkedIn" />
          <img src="./youtube.png" className="w-6 sm:w-8 h-6 sm:h-8" alt="YouTube" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
