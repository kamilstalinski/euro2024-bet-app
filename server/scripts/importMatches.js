import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Match } from "../models/Match.js";
import fs from "fs";
import path from "path";

dotenv.config();

const importMatchData = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const filePath = path.resolve("data/matches.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const matches = JSON.parse(jsonData);

    await Match.deleteMany({});
    await Match.insertMany(matches);

    console.log("Data successfully imported");
    process.exit();
  } catch (error) {
    console.error("Error importing data: ", error);
    process.exit(1);
  }
};

importMatchData();
