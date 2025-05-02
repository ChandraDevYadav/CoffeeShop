import express from "express";
import {
  createCoffee,
  getCoffees,
  getCoffeeById,
  updateCoffee,
  deleteCoffee,
} from "../controllers/coffee.controller.js";
import upload from "../middleware/upload.middleware.js"; // Import your upload middleware

const router = express.Router();

// routes/coffee.routes.js
router.post("/", upload.array("images", 5), createCoffee); // POST /api/coffees
router.get("/", getCoffees); // GET /api/coffees
router.get("/:id", getCoffeeById); // GET /api/coffees/:id
router.put("/:id", upload.array("images", 5), updateCoffee); // PUT /api/coffees/:id
router.delete("/:id", deleteCoffee); // DELETE /api/coffees/:id

export default router;
