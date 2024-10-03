import React from "react";

const WeOffer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-28">
      <div className="bg-[#3f271e] pb-12">
        <div className="px-4 sm:px-8 md:pl-28 md:pr-12 pt-20">
          <div className="flex items-center gap-3">
            <img src="./coffee-bean (1).png" alt="" className="w-6 h-6" />
            <p className="text-[18px] sm:text-[22px] text-white font-semibold font-caudex">
              COFFEE WE USE
            </p>
          </div>
          <div className="mb-8">
            <p className="text-[32px] sm:text-[40px] md:text-[60px] leading-tight font-caudex text-white font-bold my-3">
              We Offer Wide Selection of Coffee
            </p>
            <p className="text-white font-caudex font-medium">
              Vestibulum non ornare nunc. Maecenas a metus in est iaculis
              pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum
              consequat porttitor.
            </p>
          </div>
        </div>

        <div className="mx-4 sm:mx-12 md:ml-28 md:mr-12">
          <div>
            <p className="text-white font-caudex font-semibold text-xl mb-4">
              Quality Production
            </p>
            <div className="w-full bg-gray-400 dark:bg-gray-700 mb-3">
              <div
                className="bg-white text-xs font-medium text-black text-center p-0.5 leading-none"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
          </div>

          <div>
            <p className="text-white font-caudex font-semibold text-xl mt-6 mb-4">
              Maintenance Services
            </p>
            <div className="w-full bg-gray-400 dark:bg-gray-700 mb-3">
              <div
                className="bg-white text-xs font-medium text-black text-center p-0.5 leading-none"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
          </div>

          <div>
            <p className="text-white font-caudex font-semibold text-xl mt-6 mb-4">
              Product Management
            </p>
            <div className="w-full bg-gray-400 dark:bg-gray-700">
              <div
                className="bg-white text-xs font-medium text-black text-center p-0.5 leading-none"
                style={{ width: "70%" }}
              >
                70%
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="./an-img-05.png"
            alt=""
            className="absolute animate-bounce bottom-36 w-32 md:w-48"
          />
        </div>
      </div>
      <div>
        <div className="h-full">
          <img src="./skills-img.png" alt="" className="h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
