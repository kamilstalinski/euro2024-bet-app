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

    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "Uzytkownik nie istnieje",
      });
    }

    //Check if password match
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      jwt.sign(
        { email: user.email, id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        },
      );
    }

    if (!validPassword) {
      return res.json({ error: "Nieprawidłowe hasło" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
});

export { router as UserRouter };
