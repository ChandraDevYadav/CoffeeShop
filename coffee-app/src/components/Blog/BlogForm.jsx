import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        rating: '',
        author: '',
        category: '',
        tags: '',
    });

    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [userImage, setUserImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleUserImageChange = (e) => {
        const file = e.target.files[0];
        setUserImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (images.length === 0 || !userImage) {
            alert('Please select blog images and author image.');
            return;
        }

        const formData = new FormData();
        for (let key in form) {
            formData.append(key, form[key]);
        }

        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }

        formData.append('userImage', userImage);

        try {
            await axios.post('http://localhost:5000/api/blogs', formData);
            setSuccess(true);
            setForm({
                title: '',
                description: '',
                rating: '',
                author: '',
                category: '',
                tags: '',
            });
            setImages([]);
            setImagePreviews([]);
            setUserImage(null);
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Blog Post</h2>

            {success && <p className="text-green-600 mb-4 text-center">Blog created successfully!</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full px-4 py-2 border rounded" required />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" rows="4" className="w-full px-4 py-2 border rounded" required />
                <input name="author" value={form.author} onChange={handleChange} placeholder="Author Name" className="w-full px-4 py-2 border rounded" required />
                <input name="rating" value={form.rating} onChange={handleChange} type="number" step="0.1" placeholder="Rating (0-5)" className="w-full px-4 py-2 border rounded" />
                <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full px-4 py-2 border rounded" />
                <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="w-full px-4 py-2 border rounded" />

                <div className="flex flex-col gap-3">
                    {/* Image Previews */}
                    {imagePreviews.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-4">
                            {imagePreviews.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Preview ${index}`}
                                    className="w-24 h-24 object-cover rounded border"
                                />
                            ))}
                        </div>
                    )}

                    <label className="text-sm">Blog Images</label>
                    <input type="file" multiple onChange={handleImageChange} className="w-full" required />
                    {userImage && (
                        <div className="mb-4">
                            <p className="text-sm">Author Image Preview:</p>
                            <img
                                src={URL.createObjectURL(userImage)}
                                alt="Author Preview"
                                className="w-24 h-24 object-cover rounded-full border"
                            />
                        </div>
                    )}
                    <label className="text-sm">Author Image</label>
                    <input type="file" onChange={handleUserImageChange} className="w-full" required />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
                    Submit Blog
                </button>
            </form>
        </div>
    );
};

export default BlogForm;
