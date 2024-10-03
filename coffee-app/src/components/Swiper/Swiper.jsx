// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiperData = [
  {
    id: 1,
    image: "img1.jpg",
    name: "Macchiato",
    newPrice: "RS 200",
    oldPrice: "RS 250",
  },
  {
    id: 2,
    image: "img2.jpg",
    name: "Coffe Mocha",
    newPrice: "RS 180",
    oldPrice: "RS 220",
  },
  {
    id: 3,
    image: "img3.jpg",
    name: "Cappuccino",
    newPrice: "RS 200",
    oldPrice: "RS 250",
  },
  {
    id: 4,
    image: "img4.jpg",
    name: "Iced Coffe",
    newPrice: "RS 120",
    oldPrice: "RS 150",
  },
  {
    id: 5,
    image: "img5.jpg",
    name: "Chocolate Mocha",
    newPrice: "RS 220",
    oldPrice: "RS 250",
  },
  {
    id: 6,
    image: "img6.jpg",
    name: "Vanilla Latte",
    newPrice: "RS 150",
    oldPrice: "RS 180",
  },
  {
    id: 7,
    image: "img7.jpg",
    name: "Iced Latte",
    newPrice: "RS 280",
    oldPrice: "RS 320",
  },
  {
    id: 8,
    image: "img8.jpg",
    name: "Espresso",
    newPrice: "RS 180",
    oldPrice: "RS 220",
  },
  {
    id: 9,
    image: "img5 (1).jpg",
    name: "Caramel Latte",
    newPrice: "RS 150",
    oldPrice: "RS 200",
  },
  {
    id: 10,
    image: "img7 (1).jpg",
    name: "Cortado",
    newPrice: "RS 200",
    oldPrice: "RS 250",
  },
];

export default () => {
  return (
    <div className="mt-16 ">
      <div className="flex justify-center items-center gap-3">
        <img src="./cb.png" alt="" className="w-6 h-6" />
        <p className="text-[22px] font-semibold text-[#3f271e] font-caudex">
          OUR ONLINE SHOP
        </p>
      </div>
      <div className="text-center mb-16">
        <p className="text-[60px] text-[#3f271e] font-caudex font-bold my-2">
          Buy Our Featured Products
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
        spaceBetween={20}
        // Set breakpoints for responsive slides
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="my-16"
        style={{ marginLeft: '20px', marginRight: '20px' }} // Reduce margins for better fit on smaller screens
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-start pb-20 mx-0 md:mx-10">
              <img src={item.image} alt={item.name} className="shadow-lg w-full sm:w-[20rem] max-w-[100%]" /> {/* Make image responsive */}
              <div className="bg-white pl-4 w-full md:w-[17.2rem] shadow-lg py-10">
                <h3 className="text-[1.5rem] sm:text-[1.8rem] font-caudex font-semibold text-start">
                  {item.name}
                </h3>
                <div className="flex gap-4">
                  <span className="text-red-500 text-lg sm:text-2xl font-caudex font-medium line-through mr-2">
                    {item.oldPrice}
                  </span>
                  <span className="text-green-500 text-lg sm:text-2xl font-caudex font-medium">
                    {item.newPrice}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <img
          src="./an-img-04.png"
          alt=""
          className="absolute animate-bounce bottom-[30rem]"
        />
      </div>
    </div>
  );
};
