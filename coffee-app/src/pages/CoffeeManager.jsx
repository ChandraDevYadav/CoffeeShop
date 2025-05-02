// src/pages/CoffeeManager.jsx
import React, { useEffect, useState } from "react";
import CoffeeForm from "../components/CoffeeForm";
import CoffeeList from "../components/CoffeeList";
import {
    getCoffees,
    createCoffee,
    updateCoffee,
    deleteCoffee,
} from "../api/coffeeApi";

const CoffeeManager = () => {
    const [coffees, setCoffees] = useState([]);
    const [editingCoffee, setEditingCoffee] = useState(null);

    const fetchData = async () => {
        const { data } = await getCoffees();
        setCoffees(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (formData) => {
        if (editingCoffee) {
            await updateCoffee(editingCoffee._id, formData);
            setEditingCoffee(null);
        } else {
            await createCoffee(formData);
        }
        fetchData();
    };

    const handleEdit = (coffee) => {
        setEditingCoffee({ ...coffee, types: coffee.types.join(", ") });
    };

    const handleDelete = async (id) => {
        await deleteCoffee(id);
        fetchData();
    };

    return (
        <div className="container mx-auto p-6">
            <CoffeeForm
                onSubmit={handleSubmit}
                isEditing={!!editingCoffee}
                initialData={editingCoffee}
            />
            <CoffeeList
                coffees={coffees}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default CoffeeManager;
