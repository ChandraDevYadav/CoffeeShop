import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
            setBlog(res.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching blog:', err);
            setLoading(false);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        try {
            const res = await axios.post(`http://localhost:5000/api/blogs/${id}/comments`, {
                user: "Anonymous", // Or get this from logged-in user
                comment: comment
            });


            // Append new comment to the blog's comment list
            setBlog((prev) => ({
                ...prev,
                comments: [...prev.comments, res.data],
            }));

            setComment('');
        } catch (err) {
            console.error('Error posting comment:', err);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [id]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found.</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="mb-6">
                <img
                    src={`http://localhost:5000/uploads/blog/${blog.image[0]}`}
                    alt="Blog"
                    className="w-full h-96 object-cover rounded-lg"
                />
            </div>

            <div className="flex items-center gap-3 mb-4">
                <img
                    src={`http://localhost:5000/uploads/blog/${blog.userImage}`}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                    <p className="font-semibold">{blog.userName}</p>
                    <p className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 mb-10 whitespace-pre-line">{blog.content}</p>

            <hr className="my-8" />

            {/* Comments Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Comments</h2>

                {blog.comments && blog.comments.length > 0 ? (
                    <div className="space-y-4 mb-6">
                        {blog.comments.map((cmt, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">{cmt.user || 'Anonymous'}</p>
                                <p className="text-gray-800">{cmt.text}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mb-6">No comments yet.</p>
                )}

                <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full border border-gray-300 p-3 rounded-lg resize-none"
                        rows="4"
                        placeholder="Add a comment..."
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Submit Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogDetail;
