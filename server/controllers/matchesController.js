import { Match } from "../models/Match.js";

export const getMatches = async (req, res) => {
  try {
    const matches = await Match.find({});
    res.json(matches);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
