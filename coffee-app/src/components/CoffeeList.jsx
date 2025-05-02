// src/components/CoffeeList.jsx
import React from "react";

const CoffeeList = ({ coffees, onEdit, onDelete }) => {
    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffees.map((coffee) => (
                <div
                    key={coffee._id}
                    className="border rounded p-4 shadow bg-white flex flex-col"
                >
                    <img
                        src={`http://localhost:5000/uploads/${coffee.images[0]}`}
                        alt={coffee.name}
                        className="h-48 w-full object-cover mb-4 rounded"
                    />
                    <h3 className="text-lg font-bold">{coffee.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{coffee.description}</p>
                    <p className="text-green-600 font-semibold">
                        ${coffee.newPrice}{" "}
                        <span className="line-through text-gray-400">${coffee.oldPrice}</span>
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                        Types: {coffee.types.join(", ")}
                    </p>
                    <div className="mt-auto flex justify-between">
                        <button
                            onClick={() => onEdit(coffee)}
                            className="text-blue-500 hover:underline"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(coffee._id)}
                            className="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoffeeList;
