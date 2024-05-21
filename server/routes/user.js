import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
const router = express.Router();
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.json({
        error: "Email jest juz zajęty.",
      });
    }

    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.json({
        error: "Nazwa uzytkownika jest juz zajęta.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.json(newUser);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "Uzytkownik nie istnieje",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ error: "Nieprawidłowe hasło" });
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "4h",
      },
    );

    res.cookie("token", token, { httpOnly: true, maxAge: 1440000 });

    return res.json({ status: true, message: "Zalogowano pomyślnie" });
  } catch (err) {
    console.log(err);
  }
});

export { router as UserRouter };
