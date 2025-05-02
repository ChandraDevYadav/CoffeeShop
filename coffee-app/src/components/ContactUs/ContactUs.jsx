import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import axios from 'axios';

const ContactUs = () => {

  const navigate = useNavigate(); // 2. Initialize navigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
      });
      window.alert('Table booked successfully!'); // 3. Alert user
      navigate('/all-booking'); // 4. Redirect after OK
    } catch (error) {
      console.error('Error booking table:', error);
      alert('Failed to book table.');
    }
  };

  return (
    <div className='pb-24 md:pb-0'>
      <div className='grid grid-cols-2 md:grid-cols-2 mx-4 md:mx-28 '>
        <div className='bg-[#3f271e] p-6 md:p-10 col-span-2 md:col-span-1'>
          <div className='flex items-center gap-3'>
            <img src="./coffee-bean (1).png" alt="" className='w-7 h-7' />
            <p className='text-2xl font-bold font-caudex text-white'>CONTACT US</p>
          </div>
          <h1 className='text-3xl md:text-5xl my-5 font-caudex font-bold text-white'>Book Your Table Now!</h1>
          <div className="px-4">
            <form onSubmit={handleSubmit}>

              <div className="w-full">
                <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
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
              <div className='flex flex-col md:flex-row justify-start items-center gap-4 my-4'>

                <div className="w-full">
                  <label htmlFor="guests" className="block text-gray-200 font-medium mb-2">
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
                <div className="w-full">
                  <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
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
              </div>

              <div className='flex flex-col md:flex-row justify-start items-center gap-4 mb-4'>
                <div className="w-full">
                  <label htmlFor="phone" className="block text-gray-200 font-medium mb-2">
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

                <div className="w-full">
                  <label htmlFor="date" className="block text-gray-200 font-medium mb-2">
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
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 mt-4 font-medium text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Book Table
              </button>
            </form>
          </div>
        </div>
        <div className='col-span-2 md:col-span-1'>
          <img src="./booking-img.png" alt="" className='w-full h-auto' />
        </div>
      </div>
      <div className='relative'>
        <img src="./booking-img-2.png" alt="" className='absolute -bottom-24 md:-bottom-16 left-[1rem] md:left-[2rem]' />
      </div>
    </div>
  );
}

export default ContactUs;
