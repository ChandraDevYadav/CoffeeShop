import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="">
        <div className="border-2 border-gray-100 shadow-lg mt-12">
          <img src="./inner_b1.jpg" alt="" className="" />
          <div className="relative">
          <button className="bg-[#3f271e] text-white font-medium text-md px-8 py-2 absolute -bottom-5 ml-5">24th March 2024</button>
          </div>
          <p className="text-3xl font-semibold font-caudex pl-6 pr-12 mt-10 mb-6">
            Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
            tempor.
          </p>
          <p className="pr-12 font-caudex font-medium pl-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <button className="text-lg underline font-caudex font-semibold pl-6 my-8">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
