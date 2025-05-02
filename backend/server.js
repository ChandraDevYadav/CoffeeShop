import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js"; // DB connection setup
import authRoutes from "./routes/auth.routes.js"; // Authentication routes
import coffeeRoutes from "./routes/coffee.routes.js"; // Coffee routes
import bookingRoutes from "./routes/booking.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable cross-origin resource sharing
app.use(morgan("dev")); // HTTP request logging middleware

// Static file serving for uploads (e.g., images)
app.use("/uploads", express.static(path.join(process.cwd(), "/uploads")));
app.use("/uploads/blog", express.static(path.join("uploads/blog")));

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/coffees", coffeeRoutes); // Coffee CRUD routes
app.use("/api", bookingRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/messages", messageRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
