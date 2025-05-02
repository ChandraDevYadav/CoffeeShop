import { Coffee } from "../models/coffee.model.js";

// Create Coffee
export const createCoffee = async (req, res) => {
  try {
    const { name, description, oldPrice, newPrice, types } = req.body;
    const images = req.files.map((file) => file.filename); // Handle multiple file uploads

    const coffee = new Coffee({
      name,
      images,
      description,
      oldPrice,
      newPrice,
      types,
    });

    await coffee.save();
    res.status(201).json({ message: "Coffee created successfully", coffee });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create coffee", error: error.message });
  }
};

// Get All Coffees
export const getCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.status(200).json(coffees);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch coffees", error: error.message });
  }
};

// Get Single Coffee
export const getCoffeeById = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    res.status(200).json(coffee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch coffee", error: error.message });
  }
};

// Update Coffee
export const updateCoffee = async (req, res) => {
  try {
    const { name, description, oldPrice, newPrice, types } = req.body;
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }

    const updatedCoffee = await Coffee.findByIdAndUpdate(
      req.params.id,
      { name, description, oldPrice, newPrice, types },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Coffee updated successfully", updatedCoffee });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update coffee", error: error.message });
  }
};

// Delete Coffee
export const deleteCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }

    await Coffee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Coffee deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete coffee", error: error.message });
  }
};
