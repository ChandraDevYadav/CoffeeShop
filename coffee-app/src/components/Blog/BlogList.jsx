import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/blogs');
            setBlogs(res.data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${id}`);
            setBlogs((prev) => prev.filter((blog) => blog._id !== id));
        } catch (err) {
            console.error('Error deleting blog:', err);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition relative">
                        <button
                            onClick={() => handleDelete(blog._id)}
                            className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 z-10"
                        >
                            Delete
                        </button>

                        <img
                            src={`http://localhost:5000/uploads/blog/${blog.image[0]}`}
                            alt="Blog"
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src={`http://localhost:5000/uploads/blog/${blog.userImage}`}
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover border"
                                />
                                <div>
                                    <p className="font-semibold">{blog.author}</p>
                                    <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 line-clamp-3 mb-4">{blog.description}</p>

                            <Link
                                to={`/blogs/${blog._id}`}
                                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
