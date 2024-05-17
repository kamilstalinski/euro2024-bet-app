import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
const router = express.Router();
import { User } from "../models/User.js";

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "User already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return res.json({
    status: true,
    message: "Konto zostało utworzone. Witamy!",
  });
});

export { router as UserRouter };
