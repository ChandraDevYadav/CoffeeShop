import React from 'react'
import { Link } from 'react-router-dom'
import NewsLetterCont from './_components/NewsLetterCont'
import GetInTouch from './_components/GetInTouch'

const Contact = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-semibold'>Contact Us</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Contact</p>
            </div>
          </div>
        </div>
    </div>
    <GetInTouch/>
    <NewsLetterCont/>
    </div>
  )
}

export default Contact