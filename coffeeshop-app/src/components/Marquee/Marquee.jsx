import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full h-[7.5rem] bg-[#f0bdaf] overflow-hidden flex items-center relative bottom-[75px]">
      <div className="animate-marquee-alternate whitespace-nowrap flex gap-3 py-24">
        <img src="./mq2.png" alt="" className='w-32 h-32' />
        <img src="./mq3.png" alt="" className='w-32 h-32' />
        <img src="./mq4.png" alt="" className='w-32 h-32' />
        <img src="./mq5.png" alt="" className='w-32 h-32' />
        <img src="./mq6.png" alt="" className='w-32 h-32' />
        <img src="./mq7.png" alt="" className='w-32 h-32' />
        <img src="./mq8.png" alt="" className='w-32 h-32' />
        <img src="./mq9.png" alt="" className='w-32 h-32' />
      </div>
    </div>
  );
};

export default Marquee;
