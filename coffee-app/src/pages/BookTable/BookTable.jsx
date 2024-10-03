import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission (e.g., sending data to the backend)
    alert('Table booked successfully!');
    console.log(formData);
  };

  return (
    <div>
        <div className="bg-[url('./bdrc-bg.jpg')] bg-cover bg-center flex items-center justify-center h-[400px]">
        <div className='justify-center items-center'>
          <div>
            <h1 className='text-center text-7xl text-white font-semibold'>Book A Table</h1>
            <div className='flex gap-3 justify-center items-center mt-8'>
            <Link to='/' className='text-md font-bold text-white'>Home</Link>
            <p className='text-md font-bold text-gray-300 border-l-2 pl-5'>Book A Table</p>
            </div>
          </div>
        </div>
    </div>
    <div className="min-h-screen flex items-center justify-center py-16 bg-[url('./bg.jpg')] bg-cover bg-center">
      <div className="bg-white backdrop-blur-xl opacity-70 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Book A Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Date
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="guests" className="block text-gray-700 mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter number of guests"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BookTable;
