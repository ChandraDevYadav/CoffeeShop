import React from 'react'
import { FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const SoNavbar = () => {
  return (
    <div className='bg-[#3f271e] py-3'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-0 px-6 md:px-28">
        {/* Left section for opening hours */}
        <div className="flex items-center justify-center md:justify-start gap-4 text-white">
          <FaClock className='w-5 h-5 text-white' />
          <p className="text-center md:text-left text-sm">Mon - Fri: 9:00 - 19:00/ Closed on Weekends</p>
        </div>

        {/* Right section for social icons */}
        <div className="flex justify-center md:justify-end items-center gap-6 text-white">
          <FaFacebookF className='w-5 h-5' />
          <FaInstagram className='w-5 h-5' />
          <FaLinkedinIn className='w-5 h-5' />
          <FaTwitter className='w-5 h-5' />
          <FaYoutube className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default SoNavbar
