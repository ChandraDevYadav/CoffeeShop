import React from "react";

const MessageSec = () => {
  return (
    <div className="mt-12 border-b-2 border-gray-200 pb-12">
      <h1 className="text-2xl md:text-3xl font-semibold font-caudex mb-9">Comments</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="flex justify-start items-start">
          <img
            src="./team_member_3.png"
            alt=""
            className="w-24 h-24 md:w-28 md:h-28 rounded-full"
          />
        </div>
        <div className="col-span-5">
          <div>
            <h1 className="text-xl md:text-2xl font-caudex font-semibold">ALina Kelian</h1>
            <p className="my-3 text-sm md:text-md">19th May 2024</p>
            <p className="text-md md:text-lg text-gray-500 my-7 font-medium font-caudex">
              The bee's knees bite your arm off bits and bobs he nicked it gosh
              gutted mate blimey, old off his nut argy bargy vagabond buggered
              dropped.
            </p>
            <button className="px-4 py-2 md:px-6 md:py-2 rounded-md border-2 border-gray-200 flex gap-2 text-md md:text-lg justify-center items-center">
              <img src="./share1.png" className="w-4 h-4" alt="" />Reply
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 mt-10 gap-4">
            <div className="flex justify-start items-start">
              <img
                src="./team_member_1.png"
                alt=""
                className="w-24 h-24 md:w-28 md:h-28 rounded-full"
              />
            </div>
            <div className="col-span-5">
              <div>
                <h1 className="text-xl md:text-2xl font-caudex font-semibold">ALina Kelian</h1>
                <p className="my-3 text-sm md:text-md">19th May 2024</p>
                <p className="text-md md:text-lg text-gray-500 my-7 font-medium font-caudex">
                  The bee's knees bite your arm off bits and bobs he nicked it gosh
                  gutted mate blimey, old off his nut argy bargy vagabond buggered
                  dropped.
                </p>
                <button className="px-4 py-2 md:px-6 md:py-2 rounded-md border-2 border-gray-200 flex gap-2 text-md md:text-lg justify-center items-center">
                  <img src="./share1.png" className="w-4 h-4" alt="" />Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 mt-8 gap-4">
        <div className="flex justify-start items-start">
          <img
            src="./team_member_4.png"
            alt=""
            className="w-24 h-24 md:w-28 md:h-28 rounded-full"
          />
        </div>
        <div className="col-span-5">
          <div>
            <h1 className="text-xl md:text-2xl font-caudex font-semibold">ALina Kelian</h1>
            <p className="my-3 text-sm md:text-md">19th May 2024</p>
            <p className="text-md md:text-lg text-gray-500 my-7 font-medium font-caudex">
              The bee's knees bite your arm off bits and bobs he nicked it gosh
              gutted mate blimey, old off his nut argy bargy vagabond buggered
              dropped.
            </p>
            <button className="px-4 py-2 md:px-6 md:py-2 rounded-md border-2 border-gray-200 flex gap-2 text-md md:text-lg justify-center items-center">
              <img src="./share1.png" className="w-4 h-4" alt="" />Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSec;
