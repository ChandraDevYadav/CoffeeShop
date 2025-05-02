import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all">
            <img src={blog.image} alt="Blog" className="w-full h-56 object-cover rounded-lg mb-4" />
            <div className="flex items-center gap-4 mb-3">
                <img src={`http://localhost:5000/uploads/${blog.image}`} alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div>
                    <p className="font-semibold">{blog.authorName}</p>
                    <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
                </div>
            </div>
            <h3 className="text-lg font-bold mb-1">{blog.title}</h3>
            <p className="text-gray-700 mb-2">{blog.description.slice(0, 120)}...</p>
            <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-medium">⭐ {blog.rating}</span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">{blog.category}</span>
            </div>
        </div>
    );
};

export default BlogCard;
