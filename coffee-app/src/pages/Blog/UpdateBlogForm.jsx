import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        rating: '',
        tags: [],
    });

    const [imagePreview, setImagePreview] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                const { title, description, category, rating, tags, image } = res.data;
                setFormData({ title, description, category, rating, tags });
                setImagePreview(`http://localhost:5000/uploads/blog/${image}`);
            } catch (err) {
                console.error('Error fetching blog:', err);
            }
        };

        fetchBlog();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTagsChange = (e) => {
        setFormData((prev) => ({ ...prev, tags: e.target.value.split(',') }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = new FormData();
        updatedData.append('title', formData.title);
        updatedData.append('description', formData.description);
        updatedData.append('category', formData.category);
        updatedData.append('rating', formData.rating);
        updatedData.append('tags', JSON.stringify(formData.tags));
        if (image) updatedData.append('image', image);

        try {
            await axios.put(`http://localhost:5000/api/blogs/${id}`, updatedData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Blog updated successfully!');
            navigate('/');
        } catch (err) {
            console.error('Error updating blog:', err);
            alert('Failed to update blog.');
        }
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Update Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    rows="5"
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (0-5)"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags (comma separated)"
                    value={formData.tags.join(',')}
                    onChange={handleTagsChange}
                    className="w-full border px-3 py-2 rounded"
                />
                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input type="file" onChange={handleImageChange} className="mb-3" />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded" />}
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default UpdateBlogForm;
