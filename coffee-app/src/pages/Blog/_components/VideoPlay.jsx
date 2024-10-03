import React, { useState } from "react";
import Modal from "./Modal";

const VideoPlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="grid grid-cols-1">
            <div className="">
                <div className="border-2 border-gray-100 shadow-lg mt-10 md:mt-12">
                    <img src="./inner_b1.jpg" alt="" className="w-full h-auto" />
                    <div className="relative flex items-center justify-center">
                        {/* Modal toggle button */}
                        <button
                            onClick={toggleModal}
                            className="absolute bottom-[80px] md:bottom-[224px] flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg"
                        >
                            <img src="./play-button.png" alt="" className="w-16 h-16" />
                        </button>

                        {/* Main modal */}
                        <Modal isOpen={isOpen} onClose={toggleModal} />
                    </div>
                    <div className="relative">
                        <button className="bg-[#3f271e] text-white font-medium text-md px-8 py-2 absolute -bottom-5 left-5">24th March 2024</button>
                    </div>
                    <p className="text-3xl md:text-3xl font-semibold font-caudex pl-4 pr-6 mt-12 mb-5">
                    There are many variations passages of like consectetur lorem ipsum available.
                    </p>
                    <p className="pr-6 font-caudex font-medium pl-4 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse.
                    </p>
                    <button className="text-base md:text-lg underline font-caudex font-semibold pl-4 my-8">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlay;
