// models/coffeeModel.js
import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // array of image filenames
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  types: {
    type: [String], // e.g. ['Espresso', 'Latte', 'Cappuccino']
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Coffee = mongoose.model("Coffee", coffeeSchema);
