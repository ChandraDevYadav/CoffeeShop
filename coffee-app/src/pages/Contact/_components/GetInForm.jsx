import { useState } from "react";
import axios from "axios";

const GetInForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/messages/send", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="flex justify-center py-4">
      <div className="bg-[#f7f5f1] px-4 sm:px-10 lg:px-28 py-16 w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-caudex text-center">
          Get In Touch
        </h1>

        {status && (
          <p className="mt-6 text-center text-green-600 font-medium">{status}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
              className="py-4 w-full px-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="py-4 w-full px-4 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="py-4 w-full px-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="py-4 w-full px-4 border border-gray-300 rounded"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-6 px-4 py-2 border border-gray-300 rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 mt-10 text-white text-lg font-medium font-caudex rounded-lg bg-[#3f271e] hover:bg-[#2c1c15]"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInForm;
