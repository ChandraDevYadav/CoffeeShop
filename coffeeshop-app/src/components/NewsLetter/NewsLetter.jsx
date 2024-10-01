import React from 'react'

const NewsLetter = () => {
  return (
    <div className='py-20'>
        <div className='justify-center items-center'>
        <div className="flex justify-center items-center gap-3">
        <img src="./cb.png" alt="" className="w-6 h-6" />
        <p className="text-[22px] text-[#3f271e] font-semibold font-caudex">NEWSLETTER</p>
      </div>
      <div className="text-center mb-16">
        <p className="text-[60px] font-caudex text-[#3f271e] font-bold my-4">Get Best Offers On The Coffee</p>
        <p className="text-gray-500 px-4 font-caudex font-medium">
        With the subscription, enjoy your favourite coffees without having to think about it
        </p>
        <div className='relative'>
        <input type="email" placeholder='Your Email Address' className='border shadow-lg py-4 w-2/5 px-4 mt-7 rounded-lg' />
        <button className='bg-[#3f271e] px-7 py-[0.9rem] text-white rounded-lg absolute top-7 text-lg right-[27rem]'>Subscribe Now</button>
        </div>
      </div>
        </div>
        <div className="relative">
        <img src="./an-img-07.png" alt="" className="absolute animate-bounce bottom-[4rem] left-1" />
        </div>
    </div>
  )
}

export default NewsLetter