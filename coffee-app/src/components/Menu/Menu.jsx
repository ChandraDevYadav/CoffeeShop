import React from 'react';

const teaList = [
  { id: 1, name: 'Coffee Latte', description: 'Espresso and Light Layer of Crema', price: 220, img: './img1.jpg' },
  { id: 2, name: 'Coffe Americano', description: 'Espresso and Light Layer of Crema', price: 250, img: './img2.jpg' },
  { id: 3, name: 'Macchiato', description: 'Espresso and Light Layer of Crema', price: 150, img: './img3.jpg' },
  { id: 4, name: 'Coffe Mocha', description: 'Espresso and Light Layer of Crema', price: 200, img: './img4.jpg' },
  { id: 5, name: 'Cappuccino', description: 'Espresso and Light Layer of Crema', price: 250, img: './img5.jpg' },
  { id: 6, name: 'Iced Coffe', description: 'Espresso and Light Layer of Crema', price: 120, img: './img6.jpg' },
  { id: 7, name: 'Chocolate Mocha', description: 'Espresso and Light Layer of Crema', price: 220, img: './img7.jpg' },
  { id: 8, name: 'Vanilla Latte', description: 'Espresso and Light Layer of Crema', price: 210, img: './img8.jpg' },
  { id: 9, name: 'Iced Latte', description: 'Espresso and Light Layer of Crema', price: 180, img: './img2.jpg' },
  { id: 10, name: 'Espresso', description: 'Espresso and Light Layer of Crema', price: 160, img: './img1.jpg' },
  { id: 11, name: 'Caramel Latte', description: 'Espresso and Light Layer of Crema', price: 250, img: './img7 (1).jpg' },
  { id: 12, name: 'Cortado', description: 'Espresso and Light Layer of Crema', price: 200, img: './img5 (1).jpg' },
];

const Menu = () => {
  return (
    <div className='mx-4 md:mx-12 pb-12'>
      <div className='mt-36 md:mt-48'>
        <div className="flex justify-center items-center gap-3">
          <img src="./cb.png" alt="" className="w-6 h-6" />
          <p className="text-[18px] md:text-[22px] text-[#3f271e] font-semibold font-caudex">OUR FEATURES</p>
        </div>
        <div className="text-center mb-4">
          <p className="text-[36px] md:text-[60px] font-caudex font-bold text-[#3f271e] my-3">What We Provide You</p>
          <p className="text-gray-500 px-4 font-caudex font-medium">
            Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
            dolor eget neque viverra, sed interdum metus <br className="hidden md:block" /> interdum. Cras lobortis
            pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-4">
        {teaList.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row justify-center items-center">
            <div className="grid grid-cols-9 gap-2">
              <div className='col-span-2 flex justify-center items-center'>
              <img src={item.img} alt={item.name} className="w-16 h-16 md:w-28 md:h-28" />
              </div>
              <div className='col-span-4 flex justify-center items-center'>
                <div className=''>
                <p className="text-[1.2rem] md:text-[2rem] font-semibold font-caudex">{item.name}</p>
                <p className="font-caudex text-gray-500 text-[14px] pr-10 md:text-base">{item.description}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className='border-t-4 border-dotted border-t-black w-8 md:w-28 mx-1 md:mx-6'></div>
              </div>
              <div className='col-span-2 flex justify-center items-center'>
                <p className="text-black font-bold text-[16px] md:text-2xl">RS {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <img src="./an-img-04.png" alt="" className="hidden md:block absolute animate-bounce bottom-[16rem] md:bottom-[28rem] left-[20rem] md:left-[78rem]" />
      </div>
      <div className='flex justify-center items-center mt-12'>
        <button className='bg-[#3f271e] text-white px-6 md:px-8 py-3 rounded-md'>DISCOVER MORE</button>
      </div>
    </div>
  );
};

export default Menu;
