import React, { useState } from "react";

const ProductTab = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <div className="w-full mt-10">
      {/* Tab buttons */}
      <div className="flex justify-center space-x-4 border-b-2 border-gray-300 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        <button
          className={`pb-6 px-2 sm:px-4 focus:outline-none ${
            activeTab === "Tab1"
              ? "text-blue-600 border-b-2 border-gray-300"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Tab1")}
        >
          Description
        </button>
        <button
          className={`pb-6 px-2 sm:px-4 focus:outline-none ${
            activeTab === "Tab2"
              ? "text-blue-600 border-b-2 border-gray-300"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Tab2")}
        >
          Additional Information
        </button>
        <button
          className={`pb-6 px-2 sm:px-4 focus:outline-none ${
            activeTab === "Tab3"
              ? "text-blue-600 border-b-2 border-gray-300"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Tab3")}
        >
          Reviews (10)
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-6 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        {activeTab === "Tab1" && (
          <div>
            <p className="text-gray-500 text-sm sm:text-base mt-6 sm:mt-12 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p className="text-gray-500 text-sm sm:text-base my-8 pb-20">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum...
            </p>
          </div>
        )}

        {activeTab === "Tab2" && (
          <div className="pb-20">
            <h2 className="text-gray-700 text-lg sm:text-xl font-semibold py-4 border-b-2 border-gray-200">
              Additional Information
            </h2>
            <div className="flex justify-between py-4 border-b-2 border-gray-200">
              <p>Weight</p>
              <p>1.4 oz</p>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-gray-200">
              <p>Dimensions</p>
              <p>62 × 56 × 12 in</p>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-gray-200">
              <p>Size</p>
              <p>XL, XXL, LG, SM, MD</p>
            </div>
          </div>
        )}

        {activeTab === "Tab3" && (
          <div>
            <p className="text-gray-500 text-sm sm:text-base mt-6 sm:mt-12 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p className="text-gray-500 text-sm sm:text-base my-8 pb-20">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTab;
