import express from "express";
import cors from "cors";
const router = express.Router();

import {
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";

import { getUsers } from "../controllers/usersController.js";

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/logout", logoutUser);
router.get("/users", getUsers);

export { router as UserRouter };
