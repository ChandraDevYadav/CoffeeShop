import React from 'react'
import MenuPage from './_components/MenuPage'
import { Link } from 'react-router-dom'
import Swiper from '../../components/Swiper/Swiper'
import TestimonialPage from '../../components/TestimonialPage/TestimonialPage'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Menu = () => {
  return (
    <div>
        <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-semibold'>Menu</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Menu</p>
            </div>
          </div>
        </div>
    </div>
    <MenuPage/>
    <Swiper/>
    <TestimonialPage/>
    <NewsLetter/>
    </div>
  )
}

export default Menu