import React from 'react';
import { Link } from 'react-router-dom';
import Card from './_components/Card';
import VideoPlay from './_components/VideoPlay';
import Crousel from './_components/Crousel';
import Pagination from './_components/Pagination';
import Search from './_components/Search';

const Blog = () => {
  return (
    <div>
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl text-white font-semibold'>Blog</h1>
          <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-sm md:text-md font-bold text-white'>Home</Link>
            <p className='text-sm md:text-md font-bold text-gray-300 border-l-2 pl-5'>Blog</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mx-4 md:mx-28">
        <div className='col-span-1 md:col-span-4'>
          <Card />
          <VideoPlay />
          <Crousel />
          <Pagination />
        </div>
        <div className='col-span-1 md:col-span-2'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Blog;
