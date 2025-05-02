import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  login,
  register,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.post("/reset-password", resetPassword);

export default router;
