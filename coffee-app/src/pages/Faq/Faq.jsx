import React from 'react'
import Accordion from './_components/Accordion'
import { Link } from 'react-router-dom'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import OurTeam from './_components/OurTeam'

const Faq = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-semibold'>Faq</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Faq</p>
            </div>
          </div>
        </div>
    </div>
    <Accordion/>
    <NewsLetter/>
    <OurTeam/>
    </div>
  )
}

export default Faq