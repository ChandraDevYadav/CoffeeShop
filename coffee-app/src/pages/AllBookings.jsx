import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { FaPencil, FaUser, FaX } from 'react-icons/fa6';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
    });

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bookings');
            setBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const deleteBooking = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/bookings/${id}`);
            setBookings(bookings.filter((booking) => booking._id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    const startEditing = (booking) => {
        setEditingId(booking._id);
        setEditForm({
            name: booking.name,
            email: booking.email,
            phone: booking.phone,
            date: new Date(booking.date).toISOString().slice(0, 16),
            guests: booking.guests,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/bookings/${id}`, editForm);
            setBookings(bookings.map((booking) => (booking._id === id ? response.data : booking)));
            setEditingId(null);
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">📅 All Table Bookings</h2>
            <ul className="grid grid-cols-3 gap-4">
                {bookings.map((booking) => (
                    <li
                        key={booking._id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {editingId === booking._id ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="name" value={editForm.name} onChange={handleChange} className="input-style" placeholder="Name" />
                                <input name="email" value={editForm.email} onChange={handleChange} className="input-style" placeholder="Email" />
                                <input name="phone" value={editForm.phone} onChange={handleChange} className="input-style" placeholder="Phone" />
                                <input type="datetime-local" name="date" value={editForm.date} onChange={handleChange} className="input-style" />
                                <input type="number" name="guests" value={editForm.guests} onChange={handleChange} className="input-style" placeholder="Guests" />
                                <div className="flex gap-2 col-span-full mt-2">
                                    <button onClick={() => handleUpdate(booking._id)} className="btn bg-green-500 hover:bg-green-600">
                                        <FaCheck className="w-5 h-5 text-white" />
                                    </button>
                                    <button onClick={() => setEditingId(null)} className="btn bg-gray-500 hover:bg-gray-600">
                                        <FaX className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <div>
                                    <div>
                                        <p className="font-semibold text-2xl">Name: {booking.name}</p>
                                        <p className="text-[16px] text-gray-600">Email: {booking.email}</p>
                                        <p className="text-lg text-gray-600">Phone: {booking.phone}</p>
                                        <p className="text-sm text-gray-600">Date Time: {new Date(booking.date).toLocaleString()}</p>
                                        <p className="text-sm text-gray-600 flex items-center gap-2">
                                            Guests: {booking.guests}<FaUser />
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <button onClick={() => startEditing(booking)} className="btn bg-gray-200 p-3 rounded hover:bg-gray-400">
                                            <FaPencil className="w-5 h-5 text-blue-600" />
                                        </button>
                                        <button onClick={() => deleteBooking(booking._id)} className="btn bg-gray-200 p-3 rounded hover:bg-gray-400">
                                            <FaTrash className="w-5 h-5 text-red-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllBookings;
