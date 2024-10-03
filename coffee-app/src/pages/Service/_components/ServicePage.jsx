import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicePage = () => {
  return (
    <div className="bg-[#f7f5f1] py-16 px-4 sm:px-8 lg:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="z-30">
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./cb2.png" alt="" className="w-11 h-11" />
            <p className="text-xl sm:text-2xl font-caudex font-bold mt-4">
              High Quality Coffee
            </p>
            <p className="text-gray-500 font-caudex mt-3">
              Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
              auctor eget nunc sit amet.
            </p>
            <button className="flex gap-2 items-center mt-3 font-medium">
              Read More <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./coffee-shop.png" alt="" className="w-11 h-11" />
            <p className="text-xl sm:text-2xl font-caudex font-bold mt-4">
              High Quality Coffee
            </p>
            <p className="text-gray-500 font-caudex mt-3">
              Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
              auctor eget nunc sit amet.
            </p>
            <button className="flex gap-2 items-center mt-3 font-medium">
              Read More <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./fe-icon05.png" alt="" className="w-11 h-11" />
            <p className="text-xl sm:text-2xl font-caudex font-bold mt-4">
              High Quality Coffee
            </p>
            <p className="text-gray-500 font-caudex mt-3">
              Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
              auctor eget nunc sit amet.
            </p>
            <button className="flex gap-2 items-center mt-3 font-medium">
              Read More <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white px-6 py-8 shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="./fe-icon06.png" alt="" className="w-11 h-11" />
            <p className="text-xl sm:text-2xl font-caudex font-bold mt-4">
              High Quality Coffee
            </p>
            <p className="text-gray-500 font-caudex mt-3">
              Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
              auctor eget nunc sit amet.
            </p>
            <button className="flex gap-2 items-center mt-3 font-medium">
              Read More <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-12">
        <img
          src="./an-img-01.png"
          alt=""
          className="absolute animate-bounce bottom-6 left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:bottom-24"
        />
      </div>
    </div>
  );
};

export default ServicePage;
