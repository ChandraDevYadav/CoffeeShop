import React, { useState, useEffect } from "react";

const CoffeeForm = ({ onSubmit, initialData = {}, isEditing }) => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        oldPrice: "",
        newPrice: "",
        types: "",
        images: null,
    });

    const [imagePreviews, setImagePreviews] = useState([]);

    useEffect(() => {
        if (isEditing && initialData) {
            setForm({
                name: initialData.name || "",
                description: initialData.description || "",
                oldPrice: initialData.oldPrice || "",
                newPrice: initialData.newPrice || "",
                types: initialData.types || "",
                images: null, // Reset file input
            });

            // Handle image preview for existing image URLs or paths
            if (initialData.images) {
                const BASE_URL = "http://localhost:5000"; // Change this to match your backend
                const images = Array.isArray(initialData.images)
                    ? initialData.images
                    : [initialData.images];

                const previews = images.map((img) => {
                    if (typeof img === "string") {
                        return img.startsWith("http") ? img : `${BASE_URL}/${img}`;
                    } else if (img.url) {
                        return img.url.startsWith("http") ? img.url : `${BASE_URL}/${img.url}`;
                    }
                    return "";
                });

                setImagePreviews(previews);
            }
        }
    }, [initialData, isEditing]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "images" && files.length > 0) {
            setForm({ ...form, images: files });

            const previews = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            );
            setImagePreviews(previews);
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (key === "images" && value?.length) {
                for (let file of value) {
                    data.append("images", file);
                }
            } else {
                data.append(key, value);
            }
        });
        onSubmit(data);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto"
        >
            <h2 className="text-xl font-bold mb-4">
                {isEditing ? "Update Coffee" : "Create Coffee"}
            </h2>

            <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="border w-full p-2 mb-4"
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="border w-full p-2 mb-4"
                required
            />
            <input
                name="oldPrice"
                type="number"
                placeholder="Old Price"
                value={form.oldPrice}
                onChange={handleChange}
                className="border w-full p-2 mb-4"
                required
            />
            <input
                name="newPrice"
                type="number"
                placeholder="New Price"
                value={form.newPrice}
                onChange={handleChange}
                className="border w-full p-2 mb-4"
                required
            />
            <input
                name="types"
                type="text"
                placeholder="Types (comma separated)"
                value={form.types}
                onChange={handleChange}
                className="border w-full p-2 mb-4"
                required
            />

            {imagePreviews.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-4">
                    {imagePreviews.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Preview ${idx}`}
                            className="w-24 h-24 object-cover rounded border"
                        />
                    ))}
                </div>
            )}

            <input
                name="images"
                type="file"
                onChange={handleChange}
                multiple
                className="mb-4"
                accept="image/*"
                required={!isEditing}
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {isEditing ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default CoffeeForm;
