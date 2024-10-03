import React from 'react';
import { FaEnvelope, FaGlobe, FaUser } from 'react-icons/fa';

const ReplySec = () => {
  return (
    <div className='mt-12'>
      <h1 className='text-2xl font-caudex font-semibold mb-6'>Leave a Reply</h1>
      <div className='grid grid-cols-1'>
        <div className='bg-[#f5f5f5] px-4 sm:px-8 md:px-16 py-10'>
          <h1 className='text-gray-400 my-4 text-base sm:text-lg'>
            Your email address will not be published. Required fields are marked *
          </h1>
          <div className='relative'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full py-4 sm:py-5 border-0 shadow-sm'
            />
            <FaUser className='w-4 h-4 absolute top-4 sm:top-6 right-3 text-[#3f271e]' />
          </div>
          <div className='relative my-4'>
            <input
              type='text'
              placeholder='yadavchandradev2000@gmail.com'
              className='w-full py-4 sm:py-5 border-0 shadow-sm'
            />
            <FaEnvelope className='w-4 h-4 absolute top-4 sm:top-6 right-3 text-[#3f271e]' />
          </div>
          <div className='relative my-4'>
            <input
              type='text'
              placeholder='http://your-site-name.com'
              className='w-full py-4 sm:py-5 border-0 shadow-sm'
            />
            <FaGlobe className='w-4 h-4 absolute top-4 sm:top-6 right-3 text-[#3f271e]' />
          </div>
          <div className='relative'>
            <textarea
              placeholder='Your Comment'
              rows='7'
              className='w-full border-0 shadow-sm py-4'
            ></textarea>
          </div>
          <button className='px-8 sm:px-12 mt-6 py-4 bg-[#3f271e] text-white rounded-lg'>
            POST COMMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplySec;
