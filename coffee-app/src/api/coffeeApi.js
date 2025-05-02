// src/api/coffeeApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/coffees",
});

export const getCoffees = () => API.get("/");
export const createCoffee = (formData) => API.post("/", formData);
export const updateCoffee = (id, formData) => API.put(`/${id}`, formData);
export const deleteCoffee = (id) => API.delete(`/${id}`);
export const getCoffeeById = (id) => API.get(`/${id}`); // ✅ Add this line
