import React from 'react';
import { BsWordpress } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWordpress } from 'react-icons/fa';

const SideComp = () => {
  return (
    <div>
      {/* Search Section */}
      <div className='mt-2 md:mt-6 bg-[#f9f9f9] shadow-sm px-4 sm:px-6 md:px-8 py-6'>
        <h1 className='text-xl sm:text-2xl font-caudex font-semibold my-4'>Search</h1>
        <div className='relative'>
          <input
            type='text'
            placeholder='search'
            className='py-2 sm:py-3 px-4 sm:px-8 w-full border border-gray-300 rounded'
          />
          <button className='bg-[#3f271e] text-white px-4 sm:px-6 py-2 absolute right-0 rounded'>
            Search
          </button>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className='bg-[#f9f9f9] shadow-sm py-6 px-4 sm:px-6 md:px-8 mt-10'>
        <div className='mx-4 sm:mx-6 md:mx-8'>
          <p className='text-xl sm:text-2xl font-caudex font-semibold my-4'>Follow Us</p>
          <div className='flex gap-4 flex-wrap'>
            <img src='./facebook.png' alt='Facebook' className='w-8 h-8' />
            <img src='./instagram.png' alt='Instagram' className='w-8 h-8' />
            <img src='./linkedin.png' alt='LinkedIn' className='w-8 h-8' />
            <img src='./twitter.png' alt='Twitter' className='w-8 h-8' />
            <img src='./youtube.png' alt='YouTube' className='w-8 h-8' />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className='bg-[#f9f9f9] shadow-sm py-6 px-4 sm:px-6 md:px-8 mt-10'>
        <div className='mx-4 sm:mx-6 md:mx-8'>
          <p className='text-xl sm:text-2xl font-caudex font-semibold my-4'>Categories</p>
          <div className='flex justify-between items-center border-b border-b-gray-100 pb-3'>
            <p>Branding</p>
            <p>(4)</p>
          </div>
          <div className='flex justify-between items-center border-b border-b-gray-100 py-3'>
            <p>Corporat</p>
            <p>(3)</p>
          </div>
          <div className='flex justify-between items-center border-b border-b-gray-100 py-3'>
            <p>Design</p>
            <p>(3)</p>
          </div>
          <div className='flex justify-between items-center border-b border-b-gray-100 py-3'>
            <p>Gallery</p>
            <p>(3)</p>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className='bg-[#f9f9f9] shadow-sm py-6 px-4 sm:px-6 md:px-8 mt-10'>
        <div className='mx-4 sm:mx-6 md:mx-8'>
          <p className='text-xl sm:text-2xl font-caudex font-semibold my-4'>Recent Posts</p>
          <div className='border-b border-b-gray-100 pb-3'>
            <p>User Experience Psychology And Performance Smashing August 19, 2020</p>
          </div>
          <div className='border-b border-b-gray-100 py-3'>
            <p>Monthly Web Development Up Cost Of JavaScript August 19, 2020</p>
          </div>
          <div className='border-b border-b-gray-100 py-3'>
            <p>There are many variation passages of like available. August 19, 2020</p>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className='bg-[#f9f9f9] shadow-sm py-6 px-4 sm:px-6 md:px-8 mt-10'>
        <div className='mx-4 sm:mx-6 md:mx-8'>
          <p className='text-xl sm:text-2xl font-caudex font-semibold mb-4'>Tags</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
            <div className='text-center border border-black px-2 py-1'>App</div>
            <div className='text-center border border-black px-2 py-1'>Branding</div>
            <div className='text-center border border-black px-2 py-1'>Corporat</div>
            <div className='text-center border border-black px-2 py-1'>Design</div>
            <div className='text-center border border-black px-2 py-1'>Gallery</div>
            <div className='text-center border border-black px-2 py-1'>Video</div>
            <div className='col-span-2 text-center border border-black px-2 py-1'>Web Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComp;
