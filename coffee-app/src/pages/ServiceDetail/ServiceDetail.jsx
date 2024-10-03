import React from 'react';
import ServiceList from './_components/ServiceList';
import BestService from './_components/BestService';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center text-4xl sm:text-6xl md:text-7xl text-white font-semibold'>
            Service Detail
          </h1>
          <div className='flex gap-3 justify-center items-center mt-4'>
            <Link to='/' className='text-sm md:text-md font-bold text-white'>Home</Link>
            <p className='text-sm md:text-md font-bold text-gray-300 border-l-2 pl-3 md:pl-5'>Service Detail</p>
          </div>
        </div>
      </div>
      
      <div className='mx-4 sm:mx-10 md:mx-28 my-4 md:my-14'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-12">
          <div className='col-span-1 lg:col-span-2'>
            <ServiceList />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <BestService />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
