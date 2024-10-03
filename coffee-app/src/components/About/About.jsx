import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center mb-12 md:mb-0">
        <div className="relative">
          <img src="./about_img_02.png" alt="About Image" className="w-full h-auto" />
          <img
            src="./about_img_03.png"
            alt="Overlay Image"
            className="absolute top-[32rem] md:top-[30rem] left-[16rem] md:left-[22rem] w-32 md:w-auto"
          />
        </div>
      </div>

      <div>
        <div className="mx-4 md:mx-28">
          <div className="flex items-center gap-3 mt-12 md:mt-24">
            <img src="./cb.png" alt="Icon" className="w-6 h-6" />
            <p className="font-caudex text-xl md:text-3xl text-[#3f271e]">ABOUT US</p>
          </div>
          <h1 className="font-caudex text-4xl md:text-7xl text-[#3f271e] font-bold mt-5">
            Would You Like Delicious Coffee
          </h1>
          <p className="font-caudex font-medium mt-4 md:mt-8 text-gray-500 text-sm md:text-base">
            Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat,
            quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer
            ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
          </p>
          <p className="font-caudex font-medium mt-4 md:mt-6 text-gray-500 text-sm md:text-base">
            Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas
            consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In
            commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus
            blandit. Aenean eu vulputate lorem, quis auctor lectus.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8">
            <div className="mb-6 md:mb-0">
              <img src="./signature.png" alt="Signature" className="w-32 h-auto" />
              <p className="text-xl md:text-3xl font-caudex font-bold">Chan Dra Dev</p>
            </div>
            <div>
              <button className="bg-[#3f271e] text-white text-sm md:text-md rounded-md px-6 py-3 md:px-7 md:py-4">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-12 md:mt-0">
          <img
            src="./an-img-02.png"
            alt="Animated Image"
            className="absolute animate-bounce bottom-20 left-[12rem] md:bottom-40 md:left-[32rem] w-16 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
