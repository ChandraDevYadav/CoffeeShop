import React from 'react';
import SideComp from './_components/SideComp';
import { Link } from 'react-router-dom';
import MainComp from './_components/MainComp';
import TabComment from './_components/TabComment';
import RelatedPost from './_components/RelatedPost';
import Profile from './_components/Profile';
import MessageSec from './_components/MessageSec';
import ReplySec from './_components/ReplySec';

const BlogDetail = () => {
  return (
    <div className="mb-16">
      {/* Background Image Section */}
      <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[300px] md:h-[400px]">
        <div className="justify-center items-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-7xl text-white font-semibold">
            Blog Detail
          </h1>
          <div className="flex gap-3 justify-center items-center mt-4 md:mt-8">
            <Link to="/" className="text-sm md:text-md font-bold text-white">
              Home
            </Link>
            <p className="text-sm md:text-md font-bold text-gray-300 border-l-2 pl-3 md:pl-5">
              Blog Detail
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mx-4 md:mx-16 lg:mx-28 mt-8">
        {/* Main Content (Left Side) */}
        <div className="md:col-span-4">
          <MainComp />
          <TabComment />
          <RelatedPost />
          <Profile />
          <MessageSec />
          <ReplySec />
        </div>

        {/* Sidebar (Right Side) */}
        <div className="md:col-span-2">
          <SideComp />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
