import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full h-[11rem] md:h-[9rem] sm:h-[7rem] bg-[#f0bdaf] overflow-hidden flex items-center">
      <marquee behavior="alternate" direction="right" scrollamount="12">
        <div className='flex gap-8 my-4'>
          <img src="mq1.png" alt="Image 1" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq2.png" alt="Image 2" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq3.png" alt="Image 3" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq4.png" alt="Image 4" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq5.png" alt="Image 5" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq6.png" alt="Image 6" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq7.png" alt="Image 7" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq8.png" alt="Image 8" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
          <img src="mq9.png" alt="Image 9" className="w-32 h-32 sm:w-20 sm:h-20 md:w-28 md:h-28" />
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
