import React from 'react';
import { BsWordpress } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWordpress } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Search Section */}
      <div className="mt-1 md:mt-12 bg-gray-100 shadow-lg px-4 sm:px-6 py-8 sm:py-10">
        <h1 className="text-xl sm:text-2xl font-caudex font-semibold my-4">Search</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="py-3 px-4 sm:px-8 w-full"
          />
          <button className="bg-[#3f271e] text-white px-4 sm:px-6 py-3 absolute right-0">
            Search
          </button>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="bg-gray-100 shadow-lg py-8 sm:py-10 px-4 sm:px-6 mt-10">
        <p className="text-xl sm:text-2xl font-caudex font-semibold mb-4">Follow Us</p>
        <div className="flex gap-4">
          <img src="./facebook.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          <img src="./instagram.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          <img src="./linkedin.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          <img src="./twitter.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          <img src="./youtube.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 shadow-lg py-8 sm:py-10 px-4 sm:px-6 mt-10">
        <p className="text-xl sm:text-2xl font-caudex font-semibold mb-4">Categories</p>
        <div className="flex justify-between items-center border-b pb-3">
          <p>Branding</p>
          <p>(4)</p>
        </div>
        <div className="flex justify-between items-center border-b py-3">
          <p>Corporat</p>
          <p>(3)</p>
        </div>
        <div className="flex justify-between items-center border-b py-3">
          <p>Design</p>
          <p>(3)</p>
        </div>
        <div className="flex justify-between items-center border-b py-3">
          <p>Gallery</p>
          <p>(3)</p>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-gray-100 shadow-lg py-8 sm:py-10 px-4 sm:px-6 mt-10">
        <p className="text-xl sm:text-2xl font-caudex font-semibold mb-4">Recent Posts</p>
        <div className="border-b pb-3">
          <p>User Experience Psychology And Performance Smshing August 19, 2020</p>
        </div>
        <div className="border-b py-3">
          <p>Monthly Web Development Up Cost Of JavaScript August 19, 2020</p>
        </div>
        <div className="border-b py-3">
          <p>There are many variation passages of like available. August 19, 2020</p>
        </div>
      </div>

      {/* Tag Section */}
      <div className="bg-gray-100 shadow-lg py-8 sm:py-10 px-4 sm:px-6 mt-10">
        <p className="text-xl sm:text-2xl font-caudex font-semibold mb-6">Tag</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="text-center border border-black px-2 py-2">App</div>
          <div className="text-center border border-black px-2 py-2">Branding</div>
          <div className="text-center border border-black px-2 py-2">Corporat</div>
          <div className="text-center border border-black px-2 py-2">Design</div>
          <div className="text-center border border-black px-2 py-2">Gallery</div>
          <div className="text-center border border-black px-2 py-2">Video</div>
          <div className="col-span-2 sm:col-span-1 text-center border border-black px-2 py-2">
            Web Design
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
