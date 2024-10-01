import React from 'react'
import { FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const SoNavbar = () => {
  return (
    <div className='grid grid-cols-2 bg-[#3f271e] py-3'>
        <div className=''>
            <div className="flex items-center gap-4 mx-28 text-white">
            <FaClock className='w-5 h-5 text-white'/>
            <p>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</p>
            </div>
        </div>
        <div className='flex justify-end items-center mx-28'>
            <div className='flex gap-6 text-white'>
                <FaFacebookF className='w-5 h-5'/>
                <FaInstagram className='w-5 h-5'/>
                <FaLinkedinIn className='w-5 h-5'/>
                <FaTwitter className='w-5 h-5'/>
                <FaYoutube className='w-5 h-5'/>
                {/* <img src="./facebook.png" className='w-8 h-8' alt="" />
                <img src="./instagram.png" className='w-8 h-8' alt="" />
                <img src="./linkedin.png" className='w-8 h-8' alt="" />
                <img src="./twitter.png" className='w-8 h-8' alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default SoNavbar