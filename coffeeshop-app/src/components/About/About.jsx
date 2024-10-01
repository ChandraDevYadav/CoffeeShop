import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="relative">
          <img src="./about_img_02.png" alt="" />
          <img
            src="./about_img_03.png"
            alt=""
            className="absolute top-[30rem] left-[22rem]"
          />
        </div>
      </div>
      <div>
        <div className="mx-28">
        <div className="flex items-center gap-3 mt-24">
          <img src="./cb.png" alt="" className="w-6 h-6" />
          <p className="font-caudex text-3xl text-[#3f271e]">ABOUT US</p>
        </div>
        <h1 className="font-caudex text-7xl text-[#3f271e] font-bold mt-5">
          Would You Like Delicious Coffee
        </h1>
        <p className="font-caudex font-medium mt-8 text-gray-500">
          Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque.
          Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh,
          quis posuere felis. In commodo mi lectus, Integer ligula lorem,
          finibus vitae lorem vitae tincidunt dolor consequat quis.
        </p>
        <p className="font-caudex font-medium mt-6 text-gray-500">
          Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus
          vitae lorem at, egestas consectetur urna. Integer id ultricies elit.
          Maecenas sodales nibh, quis posuere felis. In commodo mi lectus
          venenatis metus eget fringilla. Suspendisse varius ante eget lorem
          tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.
        </p>
        <div className="flex justify-between items-center mt-8">
            <div>
                <img src="./signature.png" alt="" />
                <p className="text-3xl font-caudex font-bold">Chan Dra Dev</p>
            </div>
            <div>
                <button className="bg-[#3f271e] text-white text-md rounded-md px-7 py-4">DISCOVER MORE</button>
            </div>
        </div>
        </div>
        <div className="relative">
        <img src="./an-img-02.png" alt="" className="absolute animate-bounce bottom-40 left-[32rem]" />
        </div>
      </div>
    </div>
  );
};

export default About;
