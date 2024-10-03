import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './_components/AboutUs'
import WeOffer from '../../components/WeOffer/WeOffer'
import Blog from '../../components/Blog/Blog'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const About = () => {
  return (
    <div className='mb-[8rem]'>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-bold'>About</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>About</p>
            </div>
          </div>
        </div>
    </div>
    <AboutUs/>
    <WeOffer/>
    <Blog/>
    <NewsLetter/>
    </div>
  )
}

export default About