import React from 'react'
import ImageGallery from './_components/ImageGallery'
import ProductTab from './_components/ProductTab'
import { Link } from 'react-router-dom'

const ShopDetail = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-semibold'>Shop Details</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Shop Details</p>
            </div>
          </div>
        </div>
    </div>
      <ImageGallery/>
      <ProductTab/>
    </div>
  )
}

export default ShopDetail