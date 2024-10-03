import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceList = () => {
  return (
    <div>
      <div className="grid grid-cols-1">
        <div>
          <div className="bg-[#f3f4f8] pb-12">
            <h1 className="font-caudex font-semibold text-2xl my-6 mx-12 pt-16">
              Services List
            </h1>
            <ul className="mx-12">
              <li className="mb-4">
                <div className="flex pl-4 justify-between items-center border hover:bg-[#3f271e] hover:text-white">
                  <h1 className="">Electrical system</h1>
                  <p className="p-5 bg-[#777] text-black hover:bg-[#3f271e] hover:text-white cursor-pointer">
                    <FaArrowRight />
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex pl-4 justify-between items-center border hover:bg-[#3f271e] hover:text-white">
                  <h1>Tire and wheel</h1>
                  <p className="p-5 bg-[#777] text-black hover:bg-[#3f271e] hover:text-white cursor-pointer">
                    <FaArrowRight />
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex pl-4 justify-between items-center border hover:bg-[#3f271e] hover:text-white">
                  <h1>System service</h1>
                  <p className="p-5 bg-[#777] text-black hover:bg-[#3f271e] hover:text-white cursor-pointer">
                    <FaArrowRight />
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex pl-4 justify-between items-center border hover:bg-[#3f271e] hover:text-white">
                  <h1>Engine diagnostics</h1>
                  <p className="p-5 bg-[#777] text-black hover:bg-[#3f271e] hover:text-white cursor-pointer">
                    <FaArrowRight />
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex pl-4 justify-between items-center border hover:bg-[#3f271e] hover:text-white">
                  <h1>Drivability problems</h1>
                  <p className="p-5 bg-[#777] text-black hover:bg-[#3f271e] hover:text-white cursor-pointer">
                    <FaArrowRight />
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex pl-4 justify-between items-center border hover:bg-[#3f271e] hover:text-white">
                  <h1>Accident Insurance</h1>
                  <p className="p-5 bg-[#777] text-black hover:bg-[#3f271e] hover:text-white cursor-pointer">
                    <FaArrowRight />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#3f271e] px-12 py-10 my-8">
             <h1 className="text-[28px] text-center text-white font-bold font-caudex">If You Need Any Help Contact With Us</h1>
             <div className="flex justify-center items-center">
                <div className="w-8 bg-white h-1 rounded-full mt-3 mb-6"></div>
             </div>
             <p className="text-[36px] font-semibold text-white font-caudex text-center">+91 705 2101 786</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
