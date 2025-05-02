import { useState } from "react";
import axios from "axios";
import InputField from "../../components/Reusable/InputField";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [form, setForm] = useState({ email: "", fabGame: "", newPassword: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/reset-password", form);
            alert(res.data.message);
            navigate("/login");
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                <InputField label="Fab Name" name="fabGame" value={form.fabGame} onChange={handleChange} />
                <InputField label="New Password" name="newPassword" type="password" value={form.newPassword} onChange={handleChange} />
                <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 mt-4">Reset</button>
                <div className="flex justify-start items-center gap-2 pt-4">
                    <p className="text-[16px] font-medium">I remember my password</p>
                    <Link to='/login' className="text-blue-600 text-[16px] font-medium">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
