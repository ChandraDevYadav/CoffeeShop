import { useState } from "react";
import axios from "axios";
import InputField from "../../components/Reusable/InputField";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        fabGame: "",
        role: "user",
        image: null,
    });

    const [preview, setPreview] = useState(null); // For image preview
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const file = files[0];
            setForm({ ...form, [name]: file });
            setPreview(URL.createObjectURL(file)); // Set preview URL
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) =>
            formData.append(key, value)
        );

        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("Registered successfully");
            console.log(res.data);
            navigate("/login");
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <InputField label="Name" name="name" value={form.name} onChange={handleChange} />
                <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
                <InputField label="Favorite Game" name="fabGame" value={form.fabGame} onChange={handleChange} />

                {/* Role Selector */}
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-sm" htmlFor="role">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="partner">Partner</option>
                    </select>
                </div>

                {/* Profile Image */}
                <div className="mb-4">
                    {/* Image Preview */}
                    {preview && (
                        <div className="flex mb-4">
                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="w-24 h-24 object-cover rounded-full border"
                            />
                        </div>
                    )}
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="image">Profile Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4">Register</button>

                <div className="flex justify-start items-center gap-4 pt-4">
                    <p className="text-[16px] font-medium">Already have an account</p>
                    <Link to='/login' className="text-blue-600 text-[16px] font-medium">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
