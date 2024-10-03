import React from 'react'

const GetInForm = () => {
  return (
    <div className="flex justify-center py-4">
      <div className='bg-[#f7f5f1] px-4 sm:px-10 lg:px-28 py-16 w-full max-w-2xl'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold font-caudex text-center'>Get In Touch</h1>
        <div>
          <div className='flex flex-col sm:flex-row gap-4 mt-12'>
            <input type="text" placeholder='First Name' className='py-4 w-full border border-gray-300 rounded' />
            <input type="email" placeholder='Email' className='py-4 w-full border border-gray-300 rounded' />
          </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <input type="text" placeholder='Phone No.' className='py-4 w-full border border-gray-300 rounded' />
            <input type="text" placeholder='Subject' className='py-4 w-full border border-gray-300 rounded' />
          </div>
          <textarea placeholder='Message' rows='5' className='w-full mt-6 border border-gray-300 rounded'></textarea>
          <button className='w-full py-4 mt-10 text-white text-lg font-medium font-caudex rounded-lg bg-[#3f271e]'>SUBMIT NOW</button>
        </div>
      </div>
    </div>
  )
}

export default GetInForm
