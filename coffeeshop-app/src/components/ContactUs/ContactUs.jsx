import React from 'react'

const ContactUs = () => {
  return (
    <div>
        <div className='grid grid-cols-2 mx-28'>
            <div className='bg-[#3f271e]'>
                <div className='flex items-center gap-3 mx-10 mt-16'>
                    <img src="./coffee-bean (1).png" alt="" className='w-7 h-7' />
                    <p className='text-2xl font-bold font-caudex text-white'>CONTACT US</p>
                </div>
                <h1 className='text-5xl mx-10 my-5 font-caudex font-bold text-white'>Book Your Table Now !</h1>
                <div className='px-12'>
                <input type="text" placeholder='First Name' className='w-full rounded-md bg-[#311d15] text-gray-500 px-4 py-5 my-3' />
                <div className='flex gap-4'>
                    <input type="email" placeholder='Email' className='w-full rounded-md bg-[#311d15] text-gray-500 px-4 py-5 my-3' />
                    <input type="text" placeholder='Phone No.' className='w-full rounded-md bg-[#311d15] text-gray-500 px-4 py-5 my-3' />
                </div>
                <div className='flex gap-4'>
                    <input type="date" placeholder='Date' className='rounded-md bg-[#311d15] text-gray-500 px-4 py-5 my-3 w-full' />
                    <input type="time" placeholder='Time' className='rounded-md bg-[#311d15] text-gray-500 px-4 py-5 my-3 w-full' />
                </div>
                <button className='py-3 px-4 mt-5 w-full bg-white rounded-lg font-medium'>BOOK TABLE NOW</button>
                </div>
            </div>
            <div>
                <img src="./booking-img.png" alt="" className='w-full' />
            </div>
            <div className='relative'>
                <img src="./booking-img-2.png" alt="" className='absolute -bottom-16 -left-20' /> 
            </div>
        </div>
    </div>
  )
}

export default ContactUs