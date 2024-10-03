import React from "react";

const RelatedPost = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="border border-gray-300 shadow-sm">
            <img src="./inner_b2.jpg" alt="" className="w-full h-auto" />
            <p className="pl-4 pr-4 py-4 md:py-6 font-semibold text-xl md:text-2xl lg:text-3xl font-caudex">
              Auis nostrud exercita ullamco laboris nisi ut
            </p>
            <p className="pl-4 pr-4 pb-4 md:pb-6 font-caudex text-gray-500 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div>
          <div className="border border-gray-300 shadow-sm">
            <img src="./inner_b3.jpg" alt="" className="w-full h-auto" />
            <p className="pl-4 pr-4 py-4 md:py-6 font-semibold text-xl md:text-2xl lg:text-3xl font-caudex">
              Excepteur sint occaecat cupidatat non proident
            </p>
            <p className="pl-4 pr-4 pb-4 md:pb-6 font-caudex text-gray-500 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
