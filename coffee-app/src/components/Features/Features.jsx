import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-[#f7f5f1] py-20 md:py-28 mx-4 md:mx-28 my-0 md:my-28">
      <div className="flex justify-center items-center gap-3">
        <img src="./cb.png" alt="Icon" className="w-6 h-6" />
        <p className="text-xl md:text-[22px] text-[#3f271e] font-semibold font-caudex">OUR FEATURES</p>
      </div>
      <div className="text-center mb-12 md:mb-16">
        <p className="text-3xl md:text-[60px] font-caudex text-[#3f271e] font-bold my-4">What We Provide You</p>
        <p className="text-gray-500 px-4 font-caudex font-medium text-sm md:text-base">
          Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
          dolor eget neque viverra, sed interdum metus <br /> interdum. Cras lobortis
          pulvinar dolor, sit amet ullamcorper dolor iaculis vel.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-0 md:px-28">
        {/* Feature Card 1 */}
        <div className="z-30">
          <div className="bg-white px-6 shadow-lg py-8 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./cb2.png" alt="High Quality Coffee" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
        {/* Feature Card 2 */}
        <div>
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./coffee-shop.png" alt="High Quality Coffee" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
        {/* Feature Card 3 */}
        <div>
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./fe-icon05.png" alt="High Quality Coffee" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
        {/* Feature Card 4 */}
        <div>
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./fe-icon06.png" alt="High Quality Coffee" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0">
        <img src="./an-img-01.png" alt="Animated Image" className="absolute animate-bounce bottom-24 left-1/2 md:left-[90%] transform -translate-x-1/2" />
      </div>
    </div>
  );
};

export default Features;
