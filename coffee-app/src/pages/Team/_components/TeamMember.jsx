// Import required modules and icons
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// Team array with image, name, and role
const team = [
  { id: 1, image: "team01.jpg", name: "Phanch Dev", role: "Worker" },
  { id: 2, image: "team02.jpg", name: "Braham Dev", role: "Worker" },
  { id: 3, image: "team03.jpg", name: "Dharma Dev", role: "Worker" },
  { id: 4, image: "team04.jpg", name: "Indra Dev", role: "Worker" },
  { id: 5, image: "team05.jpg", name: "Chandra Dev", role: "Worker" },
  { id: 6, image: "team06.png", name: "Sachin Yadav", role: "Worker" },
  { id: 7, image: "team07.png", name: "Bikram Yadav", role: "Worker" },
  { id: 8, image: "team08.png", name: "Ganesh Dahal", role: "Worker" },
];

export default function TeamMember() {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-16">
      {team.map((member) => (
        <div key={member.id} className="relative group w-[20rem] shadow-lg">
          {/* Image with hover effect */}
          <div className="relative overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />

            {/* Social icons overlay, visible only on hover */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-4 text-white">
                <a href="#" className="text-2xl hover:text-gray-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-2xl hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl hover:text-gray-400">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Name and role */}
          <div className="bg-white p-6 text-center mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-gray-600 text-lg">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
