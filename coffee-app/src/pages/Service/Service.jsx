import React from 'react'
import { Link } from 'react-router-dom'
import ServicePage from './_components/ServicePage'
import Contact from '../Contact/Contact'
import TestimonialPage from '../../components/TestimonialPage/TestimonialPage'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import ContactUs from '../../components/ContactUs/ContactUs'

const Service = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-bold'>Service</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Service</p>
            </div>
          </div>
        </div>
    </div>
    <ServicePage/>
    <ContactUs/>
    <TestimonialPage/>
    <NewsLetter/>
    </div>
  )
}

export default Service