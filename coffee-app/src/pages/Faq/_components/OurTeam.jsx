// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiperData = [
  {
    id: 1,
    image: "team01.jpg",
    name: "Phanch Dev",
    role: "Designer"
  },
  {
    id: 2,
    image: "team02.jpg",
    name: "Braham Dev",
    role: "Designer"
  },
  {
    id: 3,
    image: "team03.jpg",
    name: "Dharma Dev",
    role: "Designer"
  },
  {
    id: 4,
    image: "team04.jpg",
    name: "Indra Dev",
    role: "Designer"
  },
  {
    id: 5,
    image: "team05.jpg",
    name: "Chandra Dev",
    role: "Designer"
  },
];

export default () => {
  return (
    <div className="px-4 md:px-0">
      <div className="flex justify-center items-center gap-3">
        <img src="./cb.png" alt="" className="w-6 h-6" />
        <p className="text-[22px] font-semibold text-[#3f271e] font-caudex">
          OUR TEAM
        </p>
      </div>
      <div className="text-center mb-16">
        <p className="text-[40px] md:text-[60px] text-[#3f271e] font-caudex font-bold my-2">
          Best Expert Coffee
        </p>
        <p className="text-gray-500 px-4 font-caudex font-medium">
          Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
          dolor eget neque viverra, sed interdum metus <br /> interdum. Cras lobortis
          pulvinar dolor, sit amet ullamcorper dolor iaculis vel
        </p>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="my-16"
        style={{ marginLeft: '30px', marginRight: '25px' }}
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="flex flex-col items-start pb-20">
              {/* Image container with relative positioning */}
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="shadow-lg w-full h-auto max-w-[20rem] transition duration-300 ease-in-out transform group-hover:scale-105"
                />

                {/* Social icons (hidden by default, appear on hover) */}
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 text-white">
                    <a href="#" className="text-xl hover:text-gray-400">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-xl hover:text-gray-400">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-xl hover:text-gray-400">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info section */}
              <div className="bg-white pl-4 w-full max-w-[20rem] shadow-lg py-10 mt-4">
                <h3 className="text-[1.5rem] md:text-[1.8rem] text-center text-[#101010] font-caudex font-semibold">
                  {item.name}
                </h3>
                <div className="flex justify-center gap-4">
                  <span className="text-[#3f271e] text-lg md:text-xl text-center font-caudex font-medium mr-2">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
