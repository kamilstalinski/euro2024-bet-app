import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  predictions: [
    {
      matchId: { type: Number, required: true },
      homeScore: { type: Number, required: true },
      awayScore: { type: Number, required: true },
    },
  ],
  points: { type: Number, default: 0 },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };
