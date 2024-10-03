// Import required modules and icons
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

// Product array with image, name, type, old price, and new price
const products = [
  {
    id: 1,
    image: "img1.jpg",
    name: "Coffe Latte",
    type: "Coffee",
    oldPrice: "$120",
    newPrice: "$99",
  },
  {
    id: 2,
    image: "img2.jpg",
    name: "Coffe Americano",
    type: "Coffee",
    oldPrice: "$80",
    newPrice: "$60",
  },
  {
    id: 3,
    image: "img3.jpg",
    name: "Macchiato",
    type: "Coffee",
    oldPrice: "$150",
    newPrice: "$130",
  },
  {
    id: 4,
    image: "img4.jpg",
    name: "Coffe Mocha",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 5,
    image: "img5.jpg",
    name: "Cappuccino",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 6,
    image: "img6.jpg",
    name: "Iced Coffe",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 7,
    image: "img7.jpg",
    name: "Chocolate Mocha",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 8,
    image: "img8.jpg",
    name: "Vanilla Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 9,
    image: "img5.jpg",
    name: "Iced Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 10,
    image: "img4.jpg",
    name: "Espresso",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 11,
    image: "img1.jpg",
    name: "Caramel Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 12,
    image: "img2.jpg",
    name: "Iced Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 13,
    image: "img4.jpg",
    name: "Vanilla Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 14,
    image: "img7.jpg",
    name: "Macchiato",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 15,
    image: "img3.jpg",
    name: "Cortado",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 16,
    image: "img5.jpg",
    name: "Iced Coffe",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 17,
    image: "img6.jpg",
    name: "Cortado",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 18,
    image: "img7.jpg",
    name: "Espresso",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 19,
    image: "img8.jpg",
    name: "Iced Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 20,
    image: "img1.jpg",
    name: "Coffe Latte",
    type: "Coffee",
    oldPrice: "$250",
    newPrice: "$200",
  },
  {
    id: 21,
    image: "img3.jpg", // replace with actual image path
    name: "Tea Latte",
    type: "Tea",
    oldPrice: "$150",
    newPrice: "$120",
  },
  {
    id: 22,
    image: "img4.jpg", // replace with actual image path
    name: "Matcha Latte",
    type: "Tea",
    oldPrice: "$180",
    newPrice: "$150",
  },
  {
    id: 23,
    image: "img5.jpg", // replace with actual image path
    name: "Black Tea",
    type: "Black Tea",
    oldPrice: "$100",
    newPrice: "$85",
  },
  {
    id: 24,
    image: "img5.jpg", // replace with actual image path
    name: "Green Tea",
    type: "Green Tea",
    oldPrice: "$80",
    newPrice: "$65",
  },
  {
    id: 25,
    image: "img6.jpg", // replace with actual image path
    name: "Chai Tea",
    type: "Tea",
    oldPrice: "$120",
    newPrice: "$95",
  },
  {
    id: 26,
    image: "img7.jpg", // replace with actual image path
    name: "Iced Black Tea",
    type: "Black Tea",
    oldPrice: "$90",
    newPrice: "$70",
  },
  {
    id: 27,
    image: "img8.jpg", // replace with actual image path
    name: "Vanilla Milkshake",
    type: "Milkshake",
    oldPrice: "$120",
    newPrice: "$99",
  },
  {
    id: 28,
    image: "img1.jpg", // replace with actual image path
    name: "Chocolate Milkshake",
    type: "Milkshake",
    oldPrice: "$130",
    newPrice: "$110",
  },
  {
    id: 29,
    image: "img2.jpg", // replace with actual image path
    name: "Green Tea Frappuccino",
    type: "Green Tea",
    oldPrice: "$140",
    newPrice: "$120",
  },
  {
    id: 30,
    image: "img3.jpg", // replace with actual image path
    name: "Matcha Green Tea",
    type: "Green Tea",
    oldPrice: "$160",
    newPrice: "$140",
  },
  {
    id: 31,
    image: "img4.jpg", // replace with actual image path
    name: "Rose Tea",
    type: "Tea",
    oldPrice: "$110",
    newPrice: "$90",
  },
  {
    id: 32,
    image: "img5.jpg", // replace with actual image path
    name: "Caramel Black Tea",
    type: "Black Tea",
    oldPrice: "$140",
    newPrice: "$115",
  },
  {
    id: 33,
    image: "img6.jpg", // replace with actual image path
    name: "Fruit Milkshake",
    type: "Milkshake",
    oldPrice: "$130",
    newPrice: "$110",
  },
  {
    id: 34,
    image: "img7.jpg", // replace with actual image path
    name: "Black Tea Latte",
    type: "Black Tea",
    oldPrice: "$120",
    newPrice: "$100",
  },
  {
    id: 35,
    image: "img8.jpg", // replace with actual image path
    name: "Green Tea Latte",
    type: "Green Tea",
    oldPrice: "$150",
    newPrice: "$125",
  },
  {
    id: 36,
    image: "img2.jpg", // replace with actual image path
    name: "Lemon Black Tea",
    type: "Black Tea",
    oldPrice: "$110",
    newPrice: "$95",
  },
  {
    id: 37,
    image: "img5.jpg", // replace with actual image path
    name: "Strawberry Milkshake",
    type: "Milkshake",
    oldPrice: "$130",
    newPrice: "$110",
  },
  {
    id: 38,
    image: "./img1.jpg", // replace with actual image path
    name: "Green Tea Smoothie",
    type: "Green Tea",
    oldPrice: "$160",
    newPrice: "$135",
  },
];

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [productsPerPage] = useState(4); // Number of products per page
  const [selectedType, setSelectedType] = useState("All"); // Selected filter type

  // Filter products based on the selected type
  const filteredProducts =
    selectedType === "All"
      ? products
      : products.filter((product) => product.type === selectedType);

  // Calculate the current products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto my-16">
      {/* Dropdown Filter */}
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-20 my-6 space-y-4 md:space-y-0">
  <p className="font-medium font-caudex text-center md:text-left">
    Showing 1–9 of 10 results
  </p>
  <div className="flex justify-center md:justify-end items-center">
    <label
      htmlFor="productType"
      className="text-base md:text-lg font-semibold"
    >
      Filter by Type:
    </label>
    <select
      id="productType"
      className="ml-2 border border-gray-300 rounded-md px-2 py-1"
      value={selectedType}
      onChange={(e) => {
        setSelectedType(e.target.value);
        setCurrentPage(1); // Reset to the first page when filter changes
      }}
    >
      <option value="All">All</option>
      <option value="Coffee">Coffee</option>
      <option value="Tea">Tea</option>
      <option value="Green Tea">Green Tea</option>
      <option value="Milkshake">MilkShake</option>
      {/* Add more options if needed */}
    </select>
  </div>
</div>


      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="relative group w-[20rem] shadow-lg">
            {/* Image with hover effect */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />

              {/* Add to Cart button overlay, visible only on hover */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-[#ff5a00] text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#ff8c33]">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product details */}
            <div className="bg-white p-6 text-center mt-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 text-lg">{product.type}</p>
              <div className="mt-2 flex justify-center gap-4">
                <span className="line-through text-gray-500">
                  {product.oldPrice}
                </span>
                <span className="text-[#ff5a00] font-semibold">
                  {product.newPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
  <ul className="flex flex-wrap gap-2 md:gap-4 w-full justify-center">
    {/* Previous button */}
    <li>
      <button
        onClick={() =>
          paginate(currentPage > 1 ? currentPage - 1 : currentPage)
        }
        className={`bg-gray-300 text-gray-700 rounded-md py-2 px-3 md:px-4 text-sm md:text-base ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-400"
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    </li>

    {/* Page numbers */}
    {Array.from({ length: totalPages }, (_, index) => {
  const page = index + 1;

  // Logic to show first few pages, the current page, and last few pages
  if (
    page === 1 || // Always show the first page
    page === totalPages || // Always show the last page
    (page >= currentPage - 1 && page <= currentPage + 1) // Show current page and pages near it
  ) {
    return (
      <li key={index}>
        <button
          onClick={() => paginate(page)}
          className={`py-1 px-2 sm:px-3 md:px-4 rounded-md text-xs sm:text-sm md:text-base ${
            currentPage === page
              ? "bg-[#ff5a00] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      </li>
    );
  }

  // Add "..." between distant pages
  if (
    (page === currentPage - 2 && currentPage > 4) || // Dots before current page group
    (page === currentPage + 2 && totalPages - currentPage > 3)
  ) {
    return (
      <li key={index} className="py-2 px-2 sm:px-3 md:px-4">
        ...
      </li>
    );
  }

  return null; // Hide other pages
})}


    {/* Next button */}
    <li>
      <button
        onClick={() =>
          paginate(
            currentPage < totalPages ? currentPage + 1 : currentPage
          )
        }
        className={`bg-gray-300 text-gray-700 rounded-md py-2 px-3 md:px-4 text-sm md:text-base ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-400"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </li>
  </ul>
</div>

    </div>
  );
}
