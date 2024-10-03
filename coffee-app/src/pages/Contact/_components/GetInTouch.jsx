import React from "react";
import { FaClock, FaEnvelopeOpen, FaMap } from "react-icons/fa";
import GetInForm from "./GetInForm";

const GetInTouch = () => {
  return (
    <div className="mx-4 md:mx-20 lg:mx-40 my-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-1 md:col-span-2 py-4">
          <div className="flex gap-5 py-10 justify-start items-center border-b border-b-gray-200">
            <div className="flex justify-center items-center p-4 md:p-6 bg-[#3f271e] rounded-full">
              <FaMap className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold font-caudex mb-2">
                Office Address
              </p>
              <p className="text-gray-400 text-sm md:text-md mb-1">
                380 St Kilda Road, Melbourne
              </p>
              <p className="text-gray-400 text-sm md:text-md">VIC 3004, Australia</p>
            </div>
          </div>

          <div className="flex gap-5 py-10 justify-start items-center border-b border-b-gray-200">
            <div className="flex justify-center items-center p-4 md:p-6 bg-[#3f271e] rounded-full">
              <FaClock className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold font-caudex mb-2">
                Working Hours
              </p>
              <p className="text-gray-400 text-sm md:text-md mb-1">
                Monday to Friday 09:00 to 18:30
              </p>
              <p className="text-gray-400 text-sm md:text-md">Saturday 15:30</p>
            </div>
          </div>

          <div className="flex gap-5 py-10 justify-start items-center border-b border-b-gray-200">
            <div className="flex justify-center items-center p-4 md:p-6 bg-[#3f271e] rounded-full">
              <FaEnvelopeOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold font-caudex mb-2">
                Message Us
              </p>
              <p className="text-gray-400 text-sm md:text-md mb-1">
                support@example.com
              </p>
              <p className="text-gray-400 text-sm md:text-md">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4">
          <GetInForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
