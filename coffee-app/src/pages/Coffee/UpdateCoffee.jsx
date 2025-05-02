// src/pages/UpdateCoffee.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CoffeeForm from "../../components/CoffeeForm";
import { updateCoffee, getCoffeeById } from "../../api/coffeeApi";

const UpdateCoffee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const fetchCoffee = async () => {
            const { data } = await getCoffeeById(id);
            setInitialData({
                ...data,
                types: data.types.join(", "), // convert back to string for form
            });
        };
        fetchCoffee();
    }, [id]);

    const handleSubmit = async (formData) => {
        await updateCoffee(id, formData);
        navigate("/coffees"); // Redirect to list
    };

    return (
        <div className="container mx-auto p-6">
            {initialData && (
                <CoffeeForm
                    onSubmit={handleSubmit}
                    initialData={initialData}
                    isEditing={true}
                />
            )}
        </div>
    );
};

export default UpdateCoffee;
