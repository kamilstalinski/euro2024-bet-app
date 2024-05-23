import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const router = express.Router();
dotenv.config();
import { AuthRouter } from "./routes/authRoutes.js";
import { UsersRouter } from "./routes/usersRoutes.js";
import { MatchesRouter } from "./routes/matchRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/auth", AuthRouter);
app.use("/users", UsersRouter);
app.use("/matches", MatchesRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT:${process.env.PORT}`);
});
