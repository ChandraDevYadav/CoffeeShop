import React from 'react'

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <img src="./about_img_02.png" alt="" className="w-full max-w-[400px] md:max-w-none" />
          <img
            src="./about_img_03.png"
            alt=""
            className="absolute top-[32rem] left-[17rem] md:top-[30rem] md:left-[22rem] w-28 h-28 md:w-auto md:h-auto"
          />
        </div>
      </div>
      
      {/* Text Section */}
      <div className="mx-8 md:mx-28">
        <div className="flex items-center gap-3 mt-12 md:mt-24">
          <img src="./cb.png" alt="" className="w-6 h-6" />
          <p className="font-caudex text-2xl md:text-3xl text-[#3f271e]">ABOUT US</p>
        </div>
        <h1 className="font-caudex text-4xl md:text-6xl lg:text-7xl text-[#3f271e] font-bold mt-5">
          Would You Like Delicious Coffee
        </h1>
        <p className="font-caudex font-medium mt-6 md:mt-8 text-gray-500 text-sm md:text-base">
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
        <div className="flex justify-between items-center mt-6 md:mt-8">
          <div>
            <img src="./signature.png" alt="" className="w-28 md:w-auto" />
            <p className="text-2xl md:text-3xl font-caudex font-bold">Chan Dra Dev</p>
          </div>
          <div>
            <button className="bg-[#3f271e] text-white text-sm md:text-md rounded-md px-5 py-3 md:px-7 md:py-4">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

      {/* Additional Floating Image */}
      <div className="relative">
        <img src="./an-img-02.png" alt="" className="hidden md:block absolute animate-bounce bottom-[8rem] left-[10rem] md:left-[80rem]" />
      </div>
    </div>
  );
}

export default AboutUs;
