import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMarker } from "react-icons/fa";
import { FaMapLocation, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 bg-[#3f271e]">
        <div className="col-span-2">
          <div className="flex ml-28 items-center gap-4 mt-4">
            <img src="./mq5.png" alt="Logo" className="w-24 h-24" />
            <p className="text-3xl font-bold text-white font-caudex">
              Sip Coffee
            </p>
          </div>
          <div className="flex ml-32 items-center gap-5 mt-4">
            <FaPhone className="text-white w-6 h-6" />
            <div>
              <p className="text-md font-medium text-white font-caudex">
                1800-121-3637
              </p>
              <p className="text-md font-medium text-white font-caudex">
                +91-7052-101-786
              </p>
            </div>
          </div>
          <div className="flex ml-32 items-center gap-5 mt-4">
            <FaEnvelope className="text-white w-6 h-6" />
            <div>
              <p className="text-md font-medium text-white font-caudex">
                info@example.com
              </p>
              <p className="text-md font-medium text-white font-caudex">
                help@example.com
              </p>
            </div>
          </div>
          <div className="flex ml-32 items-center gap-5 mt-4">
            <FaMapMarkerAlt className="text-white w-6 h-6" />
            <div>
              <p className="text-md font-medium text-white font-caudex">
                1247/Plot No. 39, 15th Phase,
              </p>
              <p className="text-md font-medium text-white font-caudex">
                LHB Colony, Kanpur
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-12">
            <h1 className="text-white text-2xl font-caudex font-semibold">
              Our Link
            </h1>
            <p className="font-caudex text-white text-md mb-3 mt-12">Home</p>
            <p className="font-caudex text-white text-md mb-3">About Us</p>
            <p className="font-caudex text-white text-md mb-3">Services</p>
            <p className="font-caudex text-white text-md mb-3">Contact Us</p>
            <p className="font-caudex text-white text-md mb-3">Blog</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="mt-12">
            <h1 className="text-white font-caudex font-semibold text-2xl">
              Our Shop Location
            </h1>
            <div className="mt-10">
              <div className="w-full md:w-[80%] h-56 border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8348118468976!2d144.96332!3d-37.8141079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0e5fcee8d53!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1613569627354!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#291813] py-3">
        <div>
            <p className="text-white px-16">Copyright © Bruin 2022 . All rights reserved.</p>
        </div>
        <div>
            <div className="flex gap-4 px-16">
                <img src="./facebook.png" className="w-8 h-8" alt="" />
                <img src="./instagram.png" className="w-8 h-8" alt="" />
                <img src="./twitter.png" className="w-8 h-8" alt="" />
                <img src="./linkedin.png" className="w-8 h-8" alt="" />
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
