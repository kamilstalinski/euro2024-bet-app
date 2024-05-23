import express from "express";
import cors from "cors";
const router = express.Router();
import { getUsers } from "../controllers/usersController.js";

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

router.get("/users", getUsers);

export { router as UsersRouter };
