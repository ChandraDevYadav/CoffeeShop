// src/pages/CreateCoffee.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CoffeeForm from "../../components/CoffeeForm";
import { createCoffee } from "../../api/coffeeApi";

const CreateCoffee = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        await createCoffee(formData);
        navigate("/coffees"); // Redirect to list after creation
    };

    return (
        <div className="container mx-auto p-6">
            <CoffeeForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateCoffee;
