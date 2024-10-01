import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-[#f7f5f1] py-28 mt-40">
      <div className="flex justify-center items-center gap-3">
        <img src="./cb.png" alt="" className="w-6 h-6" />
        <p className="text-[22px] text-[#3f271e] font-semibold font-caudex">OUR FEATURES</p>
      </div>
      <div className="text-center mb-16">
        <p className="text-[60px] font-caudex text-[#3f271e] font-bold my-4">What We Provide You</p>
        <p className="text-gray-500 px-4 font-caudex font-medium">
          Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
          dolor eget neque viverra, sed interdum metus <br /> interdum. Cras lobortis
          pulvinar dolor, sit amet ullamcorper dolor iaculis vel
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 mx-28">
        <div className="z-30">
            <div className="bg-white px-6 shadow-lg py-8 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./cb2.png" alt="" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4"/></button>
            </div>
        </div>
        <div>
            <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./coffee-shop.png" alt="" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4"/></button>
            </div>
        </div>
        <div>
            <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./fe-icon05.png" alt="" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4"/></button>
            </div>
        </div>
        <div>
            <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./fe-icon06.png" alt="" className="w-11 h-11" />
            <p className="text-[1.7rem] font-caudex font-bold mt-4">High Quality Coffee</p>
            <p className="text-gray-500 font-caudex mt-3">Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
            <button className="flex gap-2 items-center mt-3 font-medium">Read More <FaArrowRight className="w-4 h-4"/></button>
            </div>
        </div>
      </div>
      <div className="relative">
        <img src="./an-img-01.png" alt="" className="absolute animate-bounce bottom-24" />
        </div>
    </div>
  );
};

export default Features;
