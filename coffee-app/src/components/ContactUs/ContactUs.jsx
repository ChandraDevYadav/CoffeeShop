import React from 'react';

const ContactUs = () => {
  return (
    <div className='pb-24 md:pb-0'>
      <div className='grid grid-cols-2 md:grid-cols-2 mx-4 md:mx-28 '>
        <div className='bg-[#3f271e] p-6 md:p-10 col-span-2 md:col-span-1'>
          <div className='flex items-center gap-3 mb-4'>
            <img src="./coffee-bean (1).png" alt="" className='w-7 h-7' />
            <p className='text-2xl font-bold font-caudex text-white'>CONTACT US</p>
          </div>
          <h1 className='text-3xl md:text-5xl my-5 font-caudex font-bold text-white'>Book Your Table Now!</h1>
          <div className='px-0 md:px-12'>
            <input
              type="text"
              placeholder='First Name'
              className='w-full rounded-md bg-[#311d15] text-gray-500 px-4 py-3 my-3'
            />
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type="email"
                placeholder='Email'
                className='w-full rounded-md bg-[#311d15] text-gray-500 px-4 py-3 my-3'
              />
              <input
                type="text"
                placeholder='Phone No.'
                className='w-full rounded-md bg-[#311d15] text-gray-500 px-4 py-3 my-3'
              />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type="date"
                className='rounded-md bg-[#311d15] text-gray-500 px-4 py-3 my-3 w-full'
              />
              <input
                type="time"
                className='rounded-md bg-[#311d15] text-gray-500 px-4 py-3 my-3 w-full'
              />
            </div>
            <button className='py-3 px-4 mt-5 w-full bg-white rounded-lg font-medium'>BOOK TABLE NOW</button>
          </div>
        </div>
        <div className='col-span-2 md:col-span-1'>
          <img src="./booking-img.png" alt="" className='w-full h-auto' />
        </div>
      </div>
      <div className='relative'>
        <img src="./booking-img-2.png" alt="" className='absolute -bottom-24 md:-bottom-16 left-[1rem] md:left-[2rem]' />
      </div>
    </div>
  );
}

export default ContactUs;
