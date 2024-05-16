import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import { UserRouter } from "./routes/user.js";

const app = express();
app.use(express.json());
app.use("/auth", UserRouter);

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
