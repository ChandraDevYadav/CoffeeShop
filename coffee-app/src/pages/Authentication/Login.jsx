import { useState } from "react";
import axios from "axios";
import InputField from "../../components/Reusable/InputField";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);
            alert("Login successful");
            console.log(res.data);
            navigate("/"); // ✅ navigate to home
        } catch (err) {
            alert(err.response.data.message);
        }

    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
                <div className="flex justify-end items-end ">
                    <Link to='/reset-password' className="text-red-500 text-[16px] font-medium">Forgot Password</Link>
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4">Login</button>
                <div className="flex justify-start items-center gap-2 pt-4">
                    <p className="text-[16px] font-medium">Create a new account</p>
                    <Link to='/register' className="text-blue-600 text-[16px] font-medium">Register</Link>
                </div>
            </form >
        </div >
    );
};

export default Login;
