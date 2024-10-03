import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="mt-36">
      <div className="flex justify-center items-center">
        <div className="bg-[#f9f9f9] py-16 px-4 md:px-8 lg:px-16">
          <div className="flex justify-center items-center relative">
            <img
              src="./team_member_2.png"
              className="w-28 h-28 rounded-full absolute bottom-2"
              alt=""
            />
          </div>
          <h1 className="font-caudex text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold">
            Chan Dra Dev Yadav
          </h1>
          <div className="flex justify-center items-center gap-4 mt-5">
            <FaFacebook className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
            <FaLinkedin className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaYoutube className="w-5 h-5" />
          </div>
          <p className="font-caudex text-center text-gray-500 px-6 md:px-12 lg:px-24 py-8 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
