import React from 'react'

const TabComment = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className='border-t-2 border-gray-300 border-b-2 mt-28 mb-8 py-12'>
        <h1 className='text-2xl font-caudex font-semibold'>Related Tags</h1>
        <div className="flex flex-wrap gap-5 mt-7">
          <div className='border-2 px-6 py-3 text-sm font-caudex font-medium'>ORGANICS</div>
          <div className='border-2 px-6 py-3 text-sm font-caudex font-medium'>FOODS</div>
          <div className='border-2 px-6 py-3 text-sm font-caudex font-medium'>TASTY</div>
        </div>
      </div>
      <div className='border-gray-300 border-b-2 mb-4 md:mb-8 py-4 md:py-12'>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-5">
          <div className=''>
            <p className='text-sm md:text-md mb-2 md:mb-4 text-gray-500'>PREV POST</p>
            <p className='text-xl md:text-2xl font-semibold font-caudex'>Tips Minimalist</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='p-4 rounded-full bg-cyan-100 w-14 md:w-16'>
              <img src="./menu.png" alt="" className='w-6 md:w-8 h-6 md:h-8' />
            </div>
          </div>
          <div className=''>
            <p className='text-sm md:text-md mb-2 md:mb-4 text-gray-500'>NEXT POST</p>
            <p className='text-xl md:text-2xl font-semibold font-caudex'>Less Is More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabComment
