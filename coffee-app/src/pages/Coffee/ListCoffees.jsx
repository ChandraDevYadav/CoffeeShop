// src/pages/ListCoffees.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CoffeeList from "../../components/CoffeeList";
import { deleteCoffee, getCoffees } from "../../api/coffeeApi";

const ListCoffees = () => {
    const [coffees, setCoffees] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const { data } = await getCoffees();
        setCoffees(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (coffee) => {
        navigate(`/update-coffee/${coffee._id}`);
    };

    const handleDelete = async (id) => {
        await deleteCoffee(id);
        fetchData();
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => navigate("/create-coffee")}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Add Coffee
                </button>
            </div>
            <CoffeeList coffees={coffees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default ListCoffees;
