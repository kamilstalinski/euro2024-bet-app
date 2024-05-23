import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: "admin" } }, { password: 0 });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
