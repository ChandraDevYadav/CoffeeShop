import React from 'react'
import ImageGallery from '../../components/Gallery/Gallery'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center mb-14 h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-semibold'>Gallery</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Gallery</p>
            </div>
          </div>
        </div>
    </div>
      <ImageGallery/>
    </div>
  )
}

export default Gallery